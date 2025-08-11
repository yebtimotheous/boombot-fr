export interface FetchJSONOptions extends RequestInit {
  timeoutMs?: number;
  retries?: number;
  retryDelayMs?: number;
  cacheKey?: string;
  useCacheOnError?: boolean;
}

export async function fetchJSON<T = any>(url: string, opts: FetchJSONOptions = {}): Promise<T | null> {
  const {
    timeoutMs = 5000,
    retries = 0,
    retryDelayMs = 500,
    cacheKey,
    useCacheOnError = true,
    ...requestInit
  } = opts as FetchJSONOptions;

  try {
    // Feature flag: disable API calls entirely to avoid Vite proxy spam when backend is down
    const disabled = (import.meta as any)?.env?.VITE_DISABLE_API === 'true';

    const key = `cache:${cacheKey || url}`;
    const cachedStr = typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
    const cached = cachedStr ? (JSON.parse(cachedStr).data as T) : null;

    if (disabled) {
      return useCacheOnError ? (cached as T | null) : null;
    }

    const base = (import.meta as any)?.env?.VITE_API_BASE;
    const finalUrl = base && url.startsWith('/') ? `${base}${url}` : url;

    let attempt = 0;
    let lastErr: any = null;

    while (attempt <= retries) {
      try {
        const ctrl = new AbortController();
        const id = setTimeout(() => ctrl.abort(), timeoutMs);

        const res = await fetch(finalUrl, {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          cache: 'no-store',
          redirect: 'follow',
          signal: ctrl.signal,
          ...requestInit,
        });

        clearTimeout(id);

        const ct = (res.headers.get('content-type') || '').toLowerCase();
        if (!ct.includes('application/json')) {
          return null;
        }

        const data = (await res.json()) as T;

        try {
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem(key, JSON.stringify({ at: Date.now(), data }));
          }
        } catch {}

        return data;
      } catch (err) {
        lastErr = err;
        if (attempt === retries) break;
        await new Promise((r) => setTimeout(r, retryDelayMs * Math.pow(2, attempt)));
        attempt += 1;
      }
    }

    return useCacheOnError ? (cached as T | null) : null;
  } catch {
    return null;
  }
}
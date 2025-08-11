import { useEffect } from 'react';

declare global {
  interface Window {
    lucide?: {
      createIcons?: () => void;
    };
  }
}

export function useLucide(deps: unknown[] = []): void {
  useEffect(() => {
    try {
      window.lucide?.createIcons?.();
    } catch {
      // ignore
    }
    // re-run when deps change to refresh icons if DOM changed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
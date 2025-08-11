import { useEffect, useState } from 'react';
import { fetchJSON } from '../lib/fetchJSON';

export interface PerformanceMetrics {
  activeTrades?: number;
  totalInvested?: number;
  currentValue?: number;
  successRate?: number;
}

export interface TokensBoughtRow {
  name?: string;
  investmentAmount?: number;
  value?: number;
}
export type TokensBought = Record<string, TokensBoughtRow>;

export function usePerformance(pollMs = 20000) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [topPair, setTopPair] = useState<string | null>(null);
  const [offline, setOffline] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<number | undefined>(undefined);

  async function refresh() {
    let anySuccess = false;

    const perf = await fetchJSON<PerformanceMetrics>('/performance-metrics', {
      timeoutMs: 3000,
      retries: 2,
      retryDelayMs: 500,
      cacheKey: 'performance-metrics',
    });
    if (perf) {
      setMetrics(perf);
      anySuccess = true;
    }

    const tokens = await fetchJSON<TokensBought>('/tokens-bought', {
      timeoutMs: 3000,
      retries: 2,
      retryDelayMs: 500,
      cacheKey: 'tokens-bought',
    });
    if (tokens && typeof tokens === 'object') {
      let top: { name: string; pnl: number } | null = null;
      for (const k of Object.keys(tokens)) {
        const row = tokens[k] || {};
        const invested = Number(row.investmentAmount || 0);
        const current = Number(row.value || 0);
        const pnl = current - invested;
        const name = row.name || k;
        if (!top || pnl > top.pnl) top = { name, pnl };
      }
      setTopPair(top?.name || null);
      anySuccess = true;
    }

    setOffline(!anySuccess);
    if (anySuccess) setLastUpdated(Date.now());
  }

  useEffect(() => {
    refresh();
    const id = setInterval(refresh, pollMs);
    return () => clearInterval(id);
  }, [pollMs]);

  return { metrics, topPair, refresh, offline, lastUpdated };
}

// Helpers
export function formatEth(n?: number | null) {
  const v = Number(n || 0);
  return `${v.toFixed(2)} ETH`;
}
export function formatPct(n?: number | null) {
  const v = Number(n || 0);
  const sign = v >= 0 ? '+' : '';
  return `${sign}${v.toFixed(2)}%`;
}
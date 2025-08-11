import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        exchange: { 900:'#0b0e11',800:'#161a1e',700:'#1e2329',600:'#2b3139',500:'#474d57' },
        primary: { 500:'#f0b90b',400:'#fcd535' },
        success: { 500:'#02c076',400:'#03d97e' },
        danger: { 500:'#f84960',400:'#ff6b7a' },
        info: { 500:'#1e96fc',400:'#4dabf7' },
      },
      fontFamily: {
        mono: ['JetBrains Mono','monospace'],
        sans: ['DM Sans','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','sans-serif'],
        display: ['Syne','DM Sans','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
import React, { useState } from 'react';
import { useLucide } from '../hooks/useLucide';

const Footer: React.FC = () => {
  useLucide();
  const [status, setStatus] = useState<string>("");

  function onSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector('input[type="email"]') as HTMLInputElement | null;
    const email = input?.value?.trim() || "";
    if (!email) return;
    try {
      localStorage.setItem('boombot_newsletter_email', email);
    } catch {}
    setStatus("Thanks! We'll keep you posted.");
    form.reset();
  }

  return (
    <footer className="border-t border-exchange-700/50 bg-gradient-to-b from-exchange-900 to-exchange-900/90">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary-500/30 to-info-500/20 blur-md opacity-70"></div>
                <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500/20 to-info-500/10 ring-1 ring-primary-500/30">
                  <img src="/assets/img/logo.svg" alt="BoomBot Logo" className="h-7 w-7" />
                </span>
              </div>
              <span className="font-display text-xl font-bold">BoomBot</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-gray-400">
              Hyper autonomous trading with risk-aware execution and institutional-grade observability.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" aria-label="Twitter" className="rounded-lg p-2 text-gray-400 hover:bg-exchange-800 hover:text-white">
                <i data-lucide="twitter" className="h-5 w-5"></i>
              </a>
              <a href="#" aria-label="GitHub" className="rounded-lg p-2 text-gray-400 hover:bg-exchange-800 hover:text-white">
                <i data-lucide="github" className="h-5 w-5"></i>
              </a>
              <a href="#" aria-label="Discord" className="rounded-lg p-2 text-gray-400 hover:bg-exchange-800 hover:text-white">
                <i data-lucide="message-circle" className="h-5 w-5"></i>
              </a>
              <a href="#" aria-label="Telegram" className="rounded-lg p-2 text-gray-400 hover:bg-exchange-800 hover:text-white">
                <i data-lucide="send" className="h-5 w-5"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300">Product</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how" className="text-sm text-gray-400 hover:text-white transition-colors">How it works</a></li>
              <li><a href="/analytics.html" className="text-sm text-gray-400 hover:text-white transition-colors">Analytics</a></li>
              <li><a href="/setting.html" className="text-sm text-gray-400 hover:text-white transition-colors">Settings</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="../WHITEPAPER.md" className="text-sm text-gray-400 hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="https://github.com" className="text-sm text-gray-400 hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">API Reference</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300">Stay Updated</h3>
            <p className="mt-4 text-sm text-gray-400">Subscribe to our newsletter for product updates.</p>
            <form className="mt-3 flex flex-col gap-2" onSubmit={onSubscribe}>
              <input
                type="email"
                required
                placeholder="Email address"
                className="rounded-lg border border-exchange-700 bg-exchange-800/60 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50"
              />
              <button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-primary-500 to-primary-400 px-4 py-2.5 text-sm font-medium text-black hover:from-primary-400 hover:to-primary-300"
              >
                Subscribe
              </button>
              {status && <div className="mt-2 text-xs text-success-500">{status}</div>}
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-exchange-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500">
            © <span>{new Date().getFullYear()}</span> BoomBot. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
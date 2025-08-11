/**
 * BoomBot Landing - Vanilla JS
 * Mirrors the dashboard aesthetic, fetches live metrics when backend is available.
 */

(function () {
  "use strict";

  // Lightweight JSON fetch with graceful fallbacks
  async function fetchJSON(url, opts = {}) {
    try {
      const res = await fetch(url, {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        cache: "no-store",
        redirect: "follow",
        ...opts,
      });
      // Handle HTML/redirects to login gracefully
      const ct = (res.headers.get("content-type") || "").toLowerCase();
      if (!ct.includes("application/json")) {
        // if redirected to login page, just return null
        return null;
      }
      return await res.json();
    } catch {
      return null;
    }
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function setBarWidth(id, pct) {
    const el = document.getElementById(id);
    if (el) el.style.width = `${Math.max(0, Math.min(100, pct))}%`;
  }

  function formatEth(n) {
    const v = Number(n || 0);
    return `${v.toFixed(2)} ETH`;
  }

  function formatPct(n) {
    const v = Number(n || 0);
    const sign = v >= 0 ? "+" : "";
    return `${sign}${v.toFixed(2)}%`;
  }

  function shortAddr(a) {
    if (!a || typeof a !== "string") return "";
    if (a.length <= 12) return a;
    return `${a.slice(0, 6)}...${a.slice(-4)}`;
  }

  // Mobile menu
  function initMobileMenu() {
    const btn = document.getElementById("mobile-menu-toggle");
    const menu = document.getElementById("mobile-menu");
    if (!btn || !menu) return;
    
    btn.addEventListener("click", () => {
      const willShow = menu.classList.contains("hidden");
      if (willShow) {
        menu.classList.remove("hidden");
        // Trigger reflow to ensure the animation works
        menu.offsetHeight;
        menu.classList.add("show");
        // Add overlay to close menu when clicking outside
        document.body.classList.add("mobile-menu-open");
      } else {
        menu.classList.remove("show");
        setTimeout(() => {
          menu.classList.add("hidden");
          document.body.classList.remove("mobile-menu-open");
        }, 300);
      }
      try { lucide.createIcons(); } catch {}
    });

    // Close on link click
    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        menu.classList.add("hidden");
        menu.classList.remove("show");
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (document.body.classList.contains("mobile-menu-open") && 
          !menu.contains(e.target) && 
          !btn.contains(e.target)) {
        menu.classList.remove("show");
        setTimeout(() => {
          menu.classList.add("hidden");
          document.body.classList.remove("mobile-menu-open");
        }, 300);
      }
    });
  }

  // Newsletter mock
  function initNewsletter() {
    const form = document.getElementById("newsletter");
    const status = document.getElementById("newsletter-status");
    if (!form || !status) return;
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]')?.value || "";
      if (!email) return;
      // store locally (mock)
      try { localStorage.setItem("boombot_newsletter_email", email); } catch {}
      status.textContent = "Thanks! We'll keep you posted.";
      status.className = "mt-2 text-xs text-success-500";
      form.reset();
    });
  }

  // KPIs + hero metrics (uses backend if available)
  async function refreshMetrics() {
    // Performance metrics endpoint
    const perf = await fetchJSON("/performance-metrics");
    if (perf) {
      // Header/hero KPIs
      setText("kpi-uptime", "99.9%"); // cosmetic
      setText("kpi-trades", String(perf.activeTrades ?? 0));
      setText("kpi-success", `${perf.successRate ?? 0}%`);

      setText("hero-invested", formatEth(perf.totalInvested));
      setText("hero-current", formatEth(perf.currentValue));
      // 24h P&L is not always present; derive from provided fields if available
      const invested = Number(perf.totalInvested || 0);
      const current = Number(perf.currentValue || 0);
      const pnlPct = invested > 0 ? ((current - invested) / invested) * 100 : 0;
      const pnlStr = formatPct(pnlPct);
      const pnlEl = document.getElementById("hero-pnl");
      if (pnlEl) {
        pnlEl.textContent = pnlStr;
        pnlEl.className = `mt-2 font-mono text-xl font-bold ${pnlPct >= 0 ? "text-success-500" : "text-danger-500"} shimmer`;
      }

      // Metrics section
      setText("m-active", String(perf.activeTrades ?? 0));
      setText("m-invested", formatEth(perf.totalInvested));
      setText("m-current", formatEth(perf.currentValue));
      setText("m-success", `${perf.successRate ?? 0}%`);
      
      // Update progress bars
      const activeTradesPct = Math.min(100, (perf.activeTrades || 0) / 50 * 100);
      const investedPct = Math.min(100, (perf.totalInvested || 0) / 100 * 100);
      const valuePct = Math.min(100, (perf.currentValue || 0) / 100 * 100);
      const successPct = Math.min(100, perf.successRate || 0);
      
      setBarWidth("active-trades-bar", activeTradesPct);
      setBarWidth("invested-bar", investedPct);
      setBarWidth("value-bar", valuePct);
      setBarWidth("success-bar", successPct);
      
      // Update additional metrics
      const pnlPercentEl = document.getElementById("pnl-percent");
      if (pnlPercentEl) {
        pnlPercentEl.textContent = pnlStr;
        pnlPercentEl.className = `font-medium ${pnlPct >= 0 ? "text-success-400" : "text-danger-400"}`;
      }
    }

    // Tokens table for top pair label (if available)
    const tokens = await fetchJSON("/tokens-bought");
    if (tokens && typeof tokens === "object") {
      let top = null;
      for (const k of Object.keys(tokens)) {
        const row = tokens[k] || {};
        const invested = Number(row.investmentAmount || 0);
        const current = Number(row.value || 0);
        const pnl = current - invested;
        if (!top || pnl > top.pnl) {
          top = { pair: k, pnl, name: row.name || k };
        }
      }
      if (top) setText("hero-top", shortAddr(top.name || top.pair));
    }
  }

  // Strategy preview from settings/profit-factor if available
  async function refreshStrategyPreview() {
    const settings = await fetchJSON("/setting");
    if (settings) {
      const buy = Number(settings.fixedBuyAmount || 0.01);
      const maxPos = parseInt(settings.maxOpenTrades || 10, 10);

      setText("strat-buy", `${buy.toFixed(4)} ETH`);
      setText("strat-positions", String(maxPos));

      // Scale buy progress (0 to 0.1 ETH -> 0..100%)
      setBarWidth("strat-buy-bar", Math.min(100, (buy / 0.1) * 100));
      // Scale positions (1..20 -> 5..100%)
      setBarWidth("strat-positions-bar", Math.min(100, (maxPos / 20) * 100));
    }

    const pf = await fetchJSON("/profit-factor");
    if (pf && typeof pf === "object") {
      const pct = Number(pf.profitPercent || 20);
      setText("strat-profit", `+${pct}%`);
      setBarWidth("strat-profit-bar", Math.min(100, (pct / 500) * 100));
    }

    try { lucide.createIcons(); } catch {}
  }

  function initFooter() {
    const y = document.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
    
    // Add current year to copyright
    const yearSpan = document.querySelector("footer .text-sm.text-gray-500");
    if (yearSpan) {
      yearSpan.innerHTML = `© <span id="year">${new Date().getFullYear()}</span> BoomBot. All rights reserved.`;
    }
  }

  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href") || "";
        const target = id.length > 1 ? document.querySelector(id) : null;
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  // Header scroll polish: shrink header and highlight active link (rAF + cached positions)
  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    const navLinks = Array.from(document.querySelectorAll('nav a.nav-link[href^="#"]'));
    const sections = navLinks.map((a) => {
      const id = a.getAttribute("href");
      const el = id && id !== "#" ? document.querySelector(id) : null;
      return { a, el, top: 0 };
    }).filter(s => s.el);

    const recompute = () => {
      sections.forEach(s => { s.top = s.el ? s.el.offsetTop : 0; });
    };

    let ticking = false;
    const update = () => {
      if (header) {
        if (window.scrollY > 10) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
      }
      const pos = window.scrollY + 120; // offset for sticky header
      let current = null;
      for (const s of sections) {
        if (s.top <= pos) current = s;
      }
      navLinks.forEach(n => n.classList.remove("active"));
      if (current) current.a.classList.add("active");
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => { recompute(); update(); }, { passive: true });
    // Initial
    recompute();
    update();
  }

  // Reveal on scroll
  function initReveal() {
    const io = new IntersectionObserver((entries) => {
      for (const ent of entries) {
        if (ent.isIntersecting) {
          ent.target.classList.add("in");
          io.unobserve(ent.target);
        }
      }
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  }

  // Brand logo fallbacks for failed loads
  function initBrandLogoFallback() {
    const imgs = document.querySelectorAll(".brand-img");
    imgs.forEach((img) => {
      img.addEventListener("error", () => {
        const label = (img.getAttribute("data-label") || "•").slice(0,1).toUpperCase();
        const badge = document.createElement("span");
        badge.className = "brand-fallback";
        badge.textContent = label;
        img.replaceWith(badge);
      }, { once: true });
    });
  }

  // Parallax for background orbs (rAF-throttled)
  function initParallax() {
    const orb1 = document.getElementById("bg-orb-1");
    const orb2 = document.getElementById("bg-orb-2");
    if (!orb1 && !orb2) return;

    let ticking = false;

    const update = () => {
      const y = window.scrollY || 0;
      if (orb1) {
        const tx1 = (y * -0.02).toFixed(2);
        const ty1 = (-10 + Math.sin(y / 240) * 5).toFixed(2);
        orb1.style.transform = `translate3d(${tx1}px, ${ty1}px, 0)`;
      }
      if (orb2) {
        const tx2 = (y * 0.02).toFixed(2);
        const ty2 = (10 + Math.cos(y / 260) * 5).toFixed(2);
        orb2.style.transform = `translate3d(${tx2}px, ${ty2}px, 0)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
  }

  // Boot
  document.addEventListener("DOMContentLoaded", () => {
    try { lucide.createIcons(); } catch {}
    initMobileMenu();
    initNewsletter();
    initFooter();
    initSmoothAnchors();
    initHeaderScroll();
    initReveal();
    initBrandLogoFallback();
    initParallax();

    // Initial paint
    refreshMetrics();
    refreshStrategyPreview();

    // Periodic refresh
    setInterval(refreshMetrics, 20000);
    setInterval(refreshStrategyPreview, 60000);
  });
})();
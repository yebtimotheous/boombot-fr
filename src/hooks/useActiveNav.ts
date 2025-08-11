import { useEffect } from 'react';

export function useActiveNav(offset = 120): void {
  useEffect(() => {
    const nav = document.querySelector('nav');
    if (!nav) return;

    const navLinks = Array.from(
      nav.querySelectorAll('a.nav-link[href^="#"]')
    ) as HTMLAnchorElement[];

    if (navLinks.length === 0) return;

    const sections = navLinks
      .map((a) => {
        const id = a.getAttribute('href');
        const el =
          id && id !== '#' ? (document.querySelector(id) as HTMLElement | null) : null;
        return { a, el, top: 0 };
      })
      .filter((s) => s.el) as Array<{ a: HTMLAnchorElement; el: HTMLElement; top: number }>;

    const recompute = () => {
      sections.forEach((s) => {
        s.top = s.el ? s.el.offsetTop : 0;
      });
    };

    const update = () => {
      const pos = (window.scrollY || 0) + offset;
      let current: (typeof sections)[number] | null = null;
      for (const s of sections) {
        if (s.top <= pos) current = s;
      }
      navLinks.forEach((n) => n.classList.remove('active'));
      if (current) current.a.classList.add('active');
    };

    const onScroll = () => update();
    const onResize = () => {
      recompute();
      update();
    };

    recompute();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [offset]);
}
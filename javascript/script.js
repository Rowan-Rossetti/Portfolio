document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 35);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  toggle?.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    nav?.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle?.classList.remove('open');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
});

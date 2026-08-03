// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Header shadow on scroll
const header = document.getElementById('siteHeader');
const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 12);
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Contact form -> opens a pre-filled email to MEDU
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const reason = document.getElementById('reason').value;
    const message = document.getElementById('message').value.trim();

    const subject = `MEDU contact form: ${reason}`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Reason: ${reason}\n\n` +
      `${message}`;

    const mailtoLink = `mailto:medu.nonprofit@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  });
}

// Team tabs (About page)
const teamTabs = document.querySelectorAll('.team-tab-btn');
if (teamTabs.length) {
  teamTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.team-tab-btn').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.team-panel').forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      document.getElementById(tab.dataset.panel).classList.add('active');
    });
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

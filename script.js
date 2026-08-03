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

// Contact form -> submits to Formspree, shows a status message
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        contactForm.reset();
        status.textContent = "Thanks — your message is on its way. We'll get back to you soon.";
        status.style.color = 'var(--text)';
      } else {
        status.textContent = "Something went wrong. Please try again, or email medu.nonprofit@gmail.com directly.";
        status.style.color = 'var(--pink)';
      }
    } catch (err) {
      status.textContent = "Something went wrong. Please try again, or email medu.nonprofit@gmail.com directly.";
      status.style.color = 'var(--pink)';
    }

    status.style.display = 'block';
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send message';
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

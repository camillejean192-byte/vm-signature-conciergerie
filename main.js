const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  mobileMenu.hidden = open;
  document.body.classList.toggle('menu-open', !open);
});

mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  mobileMenu.hidden = true;
  document.body.classList.remove('menu-open');
}));

const property = document.querySelector('#property-type');
const weeks = document.querySelector('#weeks');
const weeksOutput = document.querySelector('#weeks-output');
const grossResult = document.querySelector('#gross-result');
const netResult = document.querySelector('#net-result');
const euro = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

function updateProjection() {
  const gross = Number(property.value) * Number(weeks.value);
  weeksOutput.value = `${weeks.value} semaines`;
  grossResult.textContent = euro.format(gross);
  netResult.textContent = euro.format(gross * 0.8);
}

property.addEventListener('change', updateProjection);
weeks.addEventListener('input', updateProjection);
updateProjection();

document.querySelectorAll('details').forEach((detail) => detail.addEventListener('toggle', () => {
  if (!detail.open) return;
  document.querySelectorAll('details').forEach((other) => { if (other !== detail) other.open = false; });
}));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item));

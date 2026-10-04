const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  mobileMenu.hidden = open;
  document.body.classList.toggle('menu-open', !open);
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    mobileMenu.hidden = true;
    document.body.classList.remove('menu-open');
  });
});

const property = document.querySelector('#property-type');
const weeks = document.querySelector('#weeks');
const weeksOutput = document.querySelector('#weeks-output');
const soloResult = document.querySelector('#solo-result');
const grossResult = document.querySelector('#gross-result');
const netResult = document.querySelector('#net-result');
const gainResult = document.querySelector('#gain-result');
const euro = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

function updateProjection() {
  const weeklyRate = Number(property.value);
  const availableWeeks = Number(weeks.value);
  const gross = weeklyRate * availableWeeks;
  const solo = gross * 0.6;
  const net = gross * 0.8;
  const gain = net - solo;
  weeksOutput.value = `${availableWeeks} semaines`;
  soloResult.textContent = euro.format(solo);
  grossResult.textContent = euro.format(gross);
  netResult.textContent = euro.format(net);
  gainResult.textContent = `+ ${euro.format(gain)} de potentiel net`;
}

property.addEventListener('change', updateProjection);
weeks.addEventListener('input', updateProjection);
updateProjection();

document.querySelectorAll('details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    document.querySelectorAll('details').forEach((other) => {
      if (other !== detail) other.open = false;
    });
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.service-card, .steps li, .territory-list span').forEach((item) => {
  item.classList.add('reveal');
  revealObserver.observe(item);
});

if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.6 } });

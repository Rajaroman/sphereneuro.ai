// small JS for year + mobile menu
document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn = document.getElementById('menu');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? 'none' : 'flex';
  menuBtn.setAttribute('aria-expanded', String(!open));
});
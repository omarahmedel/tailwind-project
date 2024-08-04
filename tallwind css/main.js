
const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector(".menu-bar");

navBtn.addEventListener('click', () => {
  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
  navBtn.setAttribute('aria-expanded', !isExpanded);
  menuBar.classList.toggle('hidden');
  menuBar.classList.toggle('flex');
})

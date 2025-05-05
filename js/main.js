// Script de interação para menu mobile
const toggle = document.getElementById('menu-toggle');
const menu   = document.querySelector('nav .menu');

toggle.addEventListener('change', () => {
  menu.classList.toggle('open', toggle.checked);
});
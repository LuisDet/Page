const btn = document.querySelectorAll('.menu-item');
const inputCheckbox = document.querySelector('#btn-menu');
btn.forEach((item) => {
  item.addEventListener('click', () => {
    inputCheckbox.checked = false;
  });
});

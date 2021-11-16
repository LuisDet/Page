const btn = document.querySelectorAll('.menu-item');
const inputCheckbox = document.querySelector('#btn-menu');
console.log(btn, inputCheckbox);
btn.forEach((item) => {
  item.addEventListener('click', () => {
    inputCheckbox.checked = false;
  });
});

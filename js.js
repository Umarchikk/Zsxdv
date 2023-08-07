const nextBtn = document.querySelector('#right-arrow');
const prevBtn = document.querySelector('#left-arrow');
const carusel = document.querySelector('#carusel');

let num = 0;

nextBtn.addEventListener('click', (e) => {
  num -= 213;
  if (num <= -1279) num = 0;
  carusel.style.marginLeft = `${num}px`;
});

prevBtn.addEventListener('click', (e) => {
  num += 213;
  if (num > 0) num = -1279;
  carusel.style.marginLeft = `${num}px`;
});
AOS.init();
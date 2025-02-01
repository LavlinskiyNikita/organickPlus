const header = document.querySelector('.header');
console.log(header);
let lastScroll = 0;

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScroll) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});

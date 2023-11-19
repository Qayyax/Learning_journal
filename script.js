viewMoreBtn = document.querySelector('button');
moreEl = document.querySelectorAll('.more');

// console.log(moreEl[0].classList);

viewMoreBtn.addEventListener('click', function () {
  if (viewMoreBtn.innerText === 'View More') {
    viewMoreBtn.innerText = 'View Less';
  } else {
    viewMoreBtn.innerText = 'View More';
  }

  moreEl.forEach((e) => {
    e.classList.toggle('more');
  });
});

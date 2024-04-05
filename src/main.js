const arrows = document.querySelectorAll('.btn-icon');
const orderBtns = document.querySelectorAll('.hero-button');

orderBtns.forEach(orderBtn => {
  orderBtn.addEventListener('mouseover', () => {
    arrows.forEach(arrow => {
      arrow.classList.add('rotate');
    });
  });
  orderBtn.addEventListener('mouseout', () => {
    arrows.forEach(arrow => {
      arrow.classList.remove('rotate');
    });
  });
});

function scrollToUp() {
  const btn = document.querySelector('.btn-ring');

  function showButton() {
    btn.classList.remove('btn-ring-hidden');
  }

  function hideButton() {
    btn.classList.add('btn-ring-hidden');
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 250 || document.documentElement.scrollTop > 250) {
      showButton();
    } else {
      hideButton();
    }
  });

  btn.onclick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
}

scrollToUp();

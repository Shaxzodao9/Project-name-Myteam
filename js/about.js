const buttons = document.querySelectorAll('.d-btn');

buttons.forEach(btn => {
  const cross = btn.querySelector('.d-cross');
  const plus = btn.querySelector('.d-plus');

  btn.addEventListener('click', () => {
    const isHidden = getComputedStyle(cross).display === 'none';

    if (isHidden) {
      cross.style.display = 'block';
      plus.style.display = 'none';
    } else {
      cross.style.display = 'none';
      plus.style.display = 'block';
    }
  });
});


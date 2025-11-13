
document.querySelectorAll('.dropdown').forEach((dropdown) => {
    dropdown.addEventListener('mouseenter', () => {
      dropdown.querySelector('.dropdown-content').style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', () => {
      dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
  });
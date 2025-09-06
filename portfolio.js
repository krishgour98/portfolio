let darkmode = localStorage.getItem('darkmode');
const switch_theme = document.querySelector('.switch_theme');
const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};
const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.removeItem('darkmode');
};
if (darkmode === 'active') {
    enableDarkmode();
}
switch_theme.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    if (darkmode !== 'active') {
        enableDarkmode();
    } else {
        disableDarkmode();
    }
});
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.bar span').forEach(span => {
      const width = span.getAttribute('data-width');
      span.style.width = width;
    });
  });
  document.getElementById('readMoreBtn').addEventListener('click', function() {
  const extraContent = document.getElementById('extra-content');
  extraContent.classList.toggle('show');

  if (extraContent.classList.contains('show')) {
    this.textContent = 'Read Less';
  } else {
    this.textContent = 'Read More';
  }
});

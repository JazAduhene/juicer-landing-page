// Navbar Menu Toggle
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

// Email Trigger
function sendEmail(address) {
  window.location.href = 'mailto:' + address;
}

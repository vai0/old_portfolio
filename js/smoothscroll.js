import smoothScroll from 'smoothscroll-polyfill'

smoothScroll.polyfill();

document.addEventListener('DOMContentLoaded', function(event) {
  var navbar = document.querySelector('.navbar');
  navbar.addEventListener('click', function(e) {
    if (e.target.innerText === 'Projects') {
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    } else if (e.target.innerText === 'Contact') {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.addEventListener('DOMContentLoaded', function(event){

  var str = "Justin_Chi";
  var text = '';
  var herotext = document.querySelector('.hero-title');
  var typespeed = 0;
  var mintypespeed = 90;
  var maxtypespeed = 150;

  for (var i = 0; i <= str.length; i++) {
    (function(x) {
      typespeed += Math.random() * (maxtypespeed - mintypespeed) + mintypespeed;
      setTimeout(function() {
        herotext.innerHTML = text + '<span>&nbsp;</span>';
        text += str[x];
      }, typespeed);
    }(i));
  }
});

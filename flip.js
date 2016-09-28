var basic = document.getElementById('basic');
var flip = document.getElementById('flip');
// If JavaScript is enabled, hide basic version and show flippable label
basic.style.display = 'none';
flip.style.display = 'flex';

var label = document.getElementsByClassName('flip-inner')[0];

label.onclick = function() {
  document.querySelector('.flip-container').classList.toggle('flip');
}

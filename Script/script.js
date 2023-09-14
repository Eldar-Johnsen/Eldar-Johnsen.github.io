// creates a sticky navbar //
window.onscroll = function() {myFunction()};
  
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

let blinking_text = document.getElementById('blink_effect');
setInterval(function() {
    blinking_text.style.display = (blinking_text.style.display == 'none' ? '' : 'none');
}, 1000);


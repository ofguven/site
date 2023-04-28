/* navbar click for small screens */
const menuIcon = document.getElementById('menu-checkbox');
const navbarMenu = document.getElementById('navbar-menu');

menuIcon.onclick = function() {
    navbarMenu.classList.toggle('show-navbar');
}

/* Image modal */
var modal = document.getElementById('modal-image');
var modalImg = document.getElementById('image-modal');
var captionText = document.getElementById('caption');

var images = document.getElementsByClassName('all-images');

for (var i = 0; i < images.length; i++) {
    var img = images[i];
    img.onclick = function(evt) {
      modal.style.display = 'block';
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      captionText.innerHTML = this.alt;
    }
  }
  
var span = document.getElementsByClassName('close-button')[0];

span.onclick = function() {
    modal.style.display = "none";
  }
   
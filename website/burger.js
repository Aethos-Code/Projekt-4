const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const burg = document.getElementById('burgerMenu');
const burgoverlay = document.getElementById('overlay');


menuOpen.addEventListener('click', () => {
    burgoverlay.style.display = "block";
    menuOpen.style.display = "none";
    burg.style.transform = "translate(50%, 0px)";
  });


menuClose.addEventListener('click', () => {
    burgoverlay.style.display = "none";
    menuOpen.style.display = "block";
    burg.style.transform = "translate(150%, 0px)";
});



  overlay.addEventListener('click', () => {
    burgoverlay.style.display = "none";
    menuOpen.style.display = "block";
    burg.style.transform = "translate(150%, 0px)";
  });



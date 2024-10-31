window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.transform = "translate(0px, 0px)";

  } else {
    document.getElementById("header").style.transform = "translate(0px, -180px)";
  }
}
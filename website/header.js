window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.transform = "translate(0px, 0px)";

  } else {
    document.getElementById("header").style.transform = "translate(0px, -180px)";
  }
}


console.log("js kode kører sku' fint broski");

const btn = document.getElementById("cta");

btn.addEventListener('click', () => {
  console.log("CLICK!");
}); 
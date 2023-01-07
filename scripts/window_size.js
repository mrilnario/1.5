function windowSizeControl() {
  var elem = document.querySelectorAll(".logo_element");
  if(window.innerWidth >= '768'){
      for(var i = 0; i < 11; i++){
      elem[i].classList.remove("swiper-slide");
      elem[i].classList.remove("swiper-slide-active");
      elem[i].style.width = "";
      elem[i].style.margin = "";
      }
  } else if (window.innerWidth >= '1120'){
  } else {
    if(!document.querySelector(".logo_element").classList.contains("swiper_slide")) {
      for(var i = 0; i < 11; i++){
        elem[i].classList.add("swiper-slide");
        elem[i].classList.add ("swiper-slide-active");
        }   
    }
  }
}

window.addEventListener('load', function() {
  windowSizeControl();
});

window.addEventListener('resize', function() {
  windowSizeControl();
})
  

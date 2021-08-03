function navigationContoller(id){
  var pos = document.getElementById(id).offsetTop;

  gsap.to(window, {scrollTo: pos, delay: .5, duration: 1});
}

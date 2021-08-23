function navigationContoller(id){
  var pos = document.getElementById(id).offsetTop;

  if(id=='header')
  {
    var pos = document.getElementById(id).offsetTop-(window.innerHeight*.1)
  }

  gsap.to(window, {scrollTo: pos, delay: .5, duration: 1});
}

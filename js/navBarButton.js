var navIds = ['nav1','nav2','nav3'];
var previousSection = 1;

function navigationContoller(id){
  var pos = document.getElementById(id).offsetTop;

  if(id=='header')
  {
    var pos = document.getElementById(id).offsetTop-(window.innerHeight*.1)
  }

  gsap.to(window, {scrollTo: pos, delay: .5, duration: 1});
}

function navBarWork(itterationNumber){
  for(let i=0; i<3; i++){
    document.getElementById(navIds[i]).style.textDecoration="none";
  }
  document.getElementById(navIds[itterationNumber-1]).style.textDecoration="underline";
  switch (itterationNumber) {
    case '1':
        switch (previousSection) {
          case 1:
            return;
            break;

          case 2:
            gsap.timeline()
              .to('#workSectionTheater', {x: "100%", opacity: 0, display: "none", duration: .5})
              .from('#workSection', {x:"-100%", duration: .5})
              .to('#workSection', {opacity: 1, display: "block", duration: .5},'-=100%')
              .to('#workSectionTheater', {clearProps: "x", clearProps:"y"})
              previousSection=1;
            break;

          case 3:
            gsap.timeline()
              .to('#resume',{x: "100%",opacity: 0, display: "none", duration: .5})
              .from('#workSection', {x:"-100%", duration: .5})
              .to('#workSection', {opacity: 1, display: "block", duration: .5},'-=100%')
              .to('#resume', {clearProps: "x", clearProps:"y"})
              previousSection=1;
            break;
        }
      break;

    case '2':
      switch (previousSection) {
        case 1:
        gsap.timeline()
          .to('#workSection', {x: "-100%", opacity: 0, display: "none", duration: .5})
          .from('#workSectionTheater', {y:"100%", duration: .5})
          .to('#workSectionTheater', {opacity: 1, display: "block", duration: .5},"-=100%")
          .to('#workSection', {clearProps: "x", clearProps:"y"})
          previousSection=2;
          break;

        case 2:
        return;
          break;

        case 3:
          gsap.timeline()
            .to('#resume',{x: "100%", opacity: 0, display: "none", duration: .5})
            .from('#workSectionTheater', {y:"100%", duration: .5})
            .to('#workSectionTheater', {opacity: 1, display: "block", duration: .5},"-=100%")
            .to('#resume', {clearProps: "x", clearProps:"y"})
            previousSection=2;
          break;
        }
      break;

    case '3':
      switch (previousSection) {
        case 1:
          gsap.timeline()
            .to('#workSection', {x: "-100%", opacity: 0, display: "none", duration: .5})
            .from('#resume', {x:"100%", duration: .5})
            .to('#resume', {opacity: 1, display: "block", duration: .5},"-=100%")
            .to('#workSection', {clearProps: "x", clearProps:"y"})
            previousSection=3;
          break;

        case 2:
          gsap.timeline()
            .to('#workSectionTheater', {y: "100%",opacity: 0, display: "none", duration: .5})
            .from('#resume', {x:"100%", duration: .5})
            .to('#resume', {opacity: 1, display: "block", duration: .5},"-=100%")
            .to('#workSectionTheater', {clearProps: "x", clearProps:"y"})
            previousSection=3;
          break;

        case 3:
          return;
          break;
      }
      break;

  }
}

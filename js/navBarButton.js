var navIds = ['nav1','nav2','nav3'];
var projectsInFile = ['.project1', '.project2', '.project3', '.project4', '.project5', '.project6', '.project7', '.project8', '.project9', '.project10', '.project11', '.project12', '.project13', '.project14', '.project15', '.project16','.project17','.project18','.project19','.project20','.project21'];
var previousSection = 1;
var currentOpen = new isOpenedClass();

function checkIfOpen(){
  if(currentOpen.className!=0 && currentOpen.className !=undefined)
  {
    document.getElementById(currentOpen.WorkSectionType).style.display="grid";
    gsap.timeline()
      .to(window, {scrollTo: (document.getElementById('header').offsetTop-(window.innerHeight*.1)), duration:.5})
      .to('#WorkContent' + (currentOpen.index+1), {opacity: 0, display: "none"},'-=50%')
      .to(currentOpen.className, {opacity: 1},'-=20%')
      .to(currentOpen.className, {scaleX: "100%", backgroundSize: "100%", backgroundColor: "none", zIndex: 0, duration: .2})
    for (let i = 0; i < projectsInFile.length; i++) {
      if(currentOpen.index!=i)
      {
        gsap.to(projectsInFile[i], {
          opacity: 1,
          delay: 1,
          duration: 2
        });
      }
    }
    currentOpen.className=0;
  }
}

function navigationContoller(id){
  var pos = document.getElementById(id).offsetTop;
  switch (id) {
    case 'header':
      var pos = document.getElementById(id).offsetTop-(window.innerHeight*.1);
      var value = window.scrollY;
      gsap.timeline()
        .to('#labelContact',{transformOrigin:'0 0', rotation:90, duration:.5})
        .to('#labelAbout',{transformOrigin:'0 0', rotation:90, duration:.5},'-=.35')
        .to('#labelWork',{transformOrigin:'0 0', rotation:90, duration:.5},'-=.35')
        .to(window, {scrollTo: pos, delay: .5, duration: Math.abs(pos-value)*.0005})
        .to('#labelContact',{rotation:0},'<')
        .to('#labelAbout',{rotation:0},'<')
        .to('#labelWork',{rotation:0},'<')
    break;

    case 'aboutMeSection':
      var pos = document.getElementById(id).offsetTop-(window.innerHeight*.15);
      var value = window.scrollY;
      gsap.timeline()
        .to('#labelContact',{transformOrigin:'0 0', rotation:90, duration:.5})
        .to('#labelAbout',{transformOrigin:'0 0', rotation:90, duration:.5},'-=.35')
        .to('#labelWork',{transformOrigin:'0 0', rotation:90, duration:.5},'-=.35')

  .to(window, {scrollTo: pos, delay: .5, duration: Math.abs(pos-value)*.0005})
        .to('#labelContact',{rotation:0},'<')
        .to('#labelAbout',{rotation:0},'<')
        .to('#labelWork',{rotation:0},'<')
    break;

    case 'contactSection':
    gsap.timeline()
      .to('#labelContact',{transformOrigin:'0 0', rotation:90, duration:.5})
      .to('#labelAbout',{transformOrigin:'0 0', rotation:90, duration:.5},'-=.35')
      .to('#labelWork',{transformOrigin:'0 0', rotation:90, duration:.5},'-=.35')
      .to(window, {scrollTo: pos, delay: .5, duration: Math.abs(pos-value)*.0005})
      .to('#labelContact',{rotation:0},'<')
      .to('#labelAbout',{rotation:0},'<')
      .to('#labelWork',{rotation:0},'<')
    break;
  }
}

function navBarWork(itterationNumber){
  for(let i=0; i<3; i++){
    document.getElementById(navIds[i]).style.textDecoration="none";
  }
  document.getElementById(navIds[itterationNumber-1]).style.textDecoration="underline";
  checkIfOpen();
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

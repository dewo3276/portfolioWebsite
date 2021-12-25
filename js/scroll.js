ScrollTrigger.create({
  trigger:".main",
  start: "5%",
  end: "bottom+=10%",
  onToggle: function () {
    var element = document.getElementsByTagName("NAV")[0];
    element.style.display="none";
    gsap.to(element,{opacity: 0, delay: .25, duration: .5})
  },
  onLeave: function() {
      var element = document.getElementsByTagName("NAV")[0];
      element.style.display="flex";
      gsap.to(element,{opacity: 1, delay: .25 ,duration: .5});
}
});

ScrollTrigger.create({
  trigger: "#header",
  start: "50% 5%",
  onEnter: function() {
    var element2 = document.getElementById("header");
    var element = document.getElementsByTagName("NAV")[0];
    element2.style.position="sticky";
    gsap.to(element,{y:"-60",duration:.5});
    gsap.to(element2,{y:"-15",duration:.5},"-=105%");
  },
  onLeaveBack: function () {
    var element2 = document.getElementById("header");
    var element = document.getElementsByTagName("NAV")[0];
    gsap.to(element,{y:"0",duration:.5});
    element2.style.position="relative";
    gsap.to(element2,{y:"0",duration:.75});
  }
});

ScrollTrigger.create({
  trigger:"#CTDworkDiv",
  start:"-2% top",
  end:"bottom",
  pin:true,
  markers:true,
  onUpdate: function({direction}) {
    var workDivMovementElement = document.getElementById("CTDworkDiv");
    switch (direction) {
      case 1:
      gsap.to(workDivMovementElement, {x:"-=108%", duration:.75});
        break;
      case -1:
      gsap.to(workDivMovementElement, {x:"+=108%", duration:.75});
        break;
    }
  }
})

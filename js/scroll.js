gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger:".main",
  start: "5%",
  end: "bottom+=10%",
  onToggle: function () {
    gsap.to(".gearA, .gearC", {
      duration: 1.5,
      rotation: 360,
      ease: "back"
    });
    gsap.to(".gearC", {
      duration: 1.5,
      rotation: 211,
      ease: "back"
    });
    gsap.to(".gearW", {
      duration: 1.5,
      rotation: -180,
      ease: "back"
    })
    var element = document.getElementsByTagName("NAV")[0];
    element.style.display="none"
    gsap.to(element,{opacity: 0, delay: .25, duration: .5})

  },
  onLeave: function() {
      var element = document.getElementsByTagName("NAV")[0];
      element.style.display="flex";
      gsap.to(element,{opacity: 1, delay: .25 ,duration: .5})
}
});

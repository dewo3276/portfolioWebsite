window.addEventListener('scroll', (event) => {
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
  });
});
gsap.registerPlugin(ScrollTrigger);

/*
let sections = gsap.utils.toArray(".panel");

sections.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    scrub: 1,
    pinSpacing: false,
    snap: 1 / (sections.length - 1)
  });
});
*/

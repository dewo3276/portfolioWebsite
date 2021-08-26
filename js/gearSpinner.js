gsap.set(".gearA, .gearW, .gearC", {
  transformOrigin: "50% 50%"
});


function workGearSpin() {
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
  var pos = document.getElementById('header').offsetTop-(window.innerHeight*.1);
  gsap.timeline()
  .to(window, {scrollTo: pos, delay: .5, duration: 1})
  .to(".gearA, .gearC", {duration: .05, rotation: 0},"+=5%")
  .to(".gearC", {duration: .05, rotation: 0})
  .to(".gearW", {duration: .05, rotation: 0});
}

function contactGearSpin() {
  gsap.to(".gearA, .gearC", {
    duration: 1.5,
    rotation: -360,
    ease: "back"
  });
  gsap.to(".gearC", {
    duration: 1.5,
    rotation: -211,
    ease: "back"
  });
  gsap.to(".gearW", {
    duration: 1.5,
    rotation: 180,
    ease: "back"
  });

  var pos = document.getElementById('contactSection').offsetTop;
  gsap.timeline()
  .to(window, {scrollTo: pos, delay: .5, duration: 1})
  .to(".gearA, .gearC", {duration: .05, rotation: 0},"+=5%")
  .to(".gearC", {duration: .05, rotation: 0})
  .to(".gearW", {duration: .05, rotation: 0});
}

function aboutMeGearSpin() {
  gsap.to(".gearA, .gearC", {
    duration: 1.5,
    rotation: -360,
    ease: "back"
  });
  gsap.to(".gearC", {
    duration: 1.5,
    rotation: -211,
    ease: "back"
  });
  gsap.to(".gearW", {
    duration: 1.5,
    rotation: 180,
    ease: "back"
  });

  var pos = document.getElementById('aboutMeSection').offsetTop;
  gsap.timeline()
  .to(window, {scrollTo: pos, delay: .5, duration: 1})
  .to(".gearA, .gearC", {duration: .05, rotation: 0},"+=5%")
  .to(".gearC", {duration: .05, rotation: 0})
  .to(".gearW", {duration: .05, rotation: 0});
}

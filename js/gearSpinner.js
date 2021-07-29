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
  var pos = document.getElementById('workSection').offsetTop;
  gsap.to(window, {scrollTo: pos, delay: .5, duration: 1});
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

  var pos = document.getElementById('aboutMeSetion').offsetTop;
  gsap.to(window, {scrollTo: pos, delay: .5, duration: 1});
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

  var pos = document.getElementById('contactSection').offsetTop;
  gsap.to(window, {scrollTo: pos, delay: .5, duration: 1});
}

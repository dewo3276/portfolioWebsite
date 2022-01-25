ScrollTrigger.create({
  trigger: ".main",
  start: "10%",
  end: "bottom-=50%",
  onToggle: function() {
    var element = document.getElementsByTagName("NAV")[0];
    element.style.display = "none";
    gsap.to(element, {
      opacity: 0,
      delay: .25,
      duration: .5
    })
  },
  onLeave: function() {
    var element = document.getElementsByTagName("NAV")[0];
    element.style.display = "flex";
    gsap.to(element, {
      opacity: 1,
      delay: .25,
      duration: .5
    });
  }
});

window.addEventListener('scroll', function() {
  let value = window.scrollY;
  let about = document.getElementById('aboutMeSection');
  let coolPic = document.getElementById('aboutMepic');
  let path1 = document.getElementById('path1');
  let path2 = document.getElementById('path2');
  let path3 = document.getElementById('path3');
  let path4 = document.getElementById('path4');

  let pathWork1 = document.getElementById('pathWork1');
  let pathWork2 = document.getElementById('pathWork2');
  let pathWork3 = document.getElementById('pathWork3');
  let pathWork4 = document.getElementById('pathWork4');
  let pathWork5 = document.getElementById('pathWork5');
  let pathWork6 = document.getElementById('pathWork6');
  let pathWork7 = document.getElementById('pathWork7');
  let pathWork8 = document.getElementById('pathWork8');
  if (window.innerWidth>800) {
    about.style.left = (value - 1400) + value * .75 + 'px';
  }

  else if (window.innerWidth<=800) {
    about.style.left = (value - 1400) + value * .85 + 'px';
  }

  path1.style.strokeDashoffset = value * -5 + 'px';
  path2.style.strokeDashoffset = value * 5 + 'px';
  path3.style.strokeDashoffset = value * 5 + 'px';
  path4.style.strokeDashoffset = value * 5 + 'px';
  if (value > 200 && value < 400) {
    gsap.to('#welcomeBanner', {
      transformOrigin: "0 0",
      scaleX: value * .005,
      scaleY: value * .005,
      opacity: value * (1 / value * 1.25)
    })
  } else if (value <= 200) {
    gsap.to('#welcomeBanner', {
      transformOrigin: "0 0",
      scaleX: 1,
      scaleY: 1
    })
  } else if (value >= 400 && value<600) {
    gsap.to('#welcomeBanner', {
      opacity: value * (1 / value * .25)
    });

  } else {
    gsap.to('#welcomeBanner', {
      opacity: 0
    })
  }

  pathWork1.style.strokeDashoffset = value * -5 + 'px';
  pathWork2.style.strokeDashoffset = value * 5 + 'px';
  pathWork3.style.strokeDashoffset = value * 5 + 'px';
  pathWork4.style.strokeDashoffset = value * 5 + 'px';
  pathWork5.style.strokeDashoffset = value * -5 + 'px';
  pathWork6.style.strokeDashoffset = value * 5 + 'px';
  pathWork7.style.strokeDashoffset = value * 5 + 'px';
  pathWork8.style.strokeDashoffset = value * 5 + 'px';

})

gsap.to('#CTDworkDiv', {
  xPercent: -548,
  ease: "none",
  scrollTrigger: {
    trigger: "#CTDworkDiv",
    onEnter: function() {
      var element2 = document.getElementById("header");
      var element = document.getElementsByTagName("NAV")[0];
      element2.style.position="sticky";
      gsap.to(element,{y:"-70",duration:.5});
      gsap.to(element2,{y:"-15",duration:.5},"-=105%");
    },
    onLeaveBack: function () {
      var element2 = document.getElementById("header");
      var element = document.getElementsByTagName("NAV")[0];
      gsap.to(element,{y:"0",duration:.5});
      element2.style.position="relative";
      gsap.to(element2,{y:"0",duration:.75});
    },
    snap: 1/5,
    start:"top 5%",
    end:"bottom",
    scrub: .15,
    pin: true
  }
})

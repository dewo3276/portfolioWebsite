ScrollTrigger.create({
  trigger: "#main",
  start: "10%",
  end: "bottom-=50%",
  onToggle: function() {
    var element = document.getElementById("menuBar");
    element.style.fontSize="2em";
  },
  onLeave: function() {
    var element = document.getElementById("menuBar");
    element.style.fontSize="1.25em";
  }
});

window.addEventListener('keydown', function(event){
  if(event.key === "Escape"){
    shrink();
  }
})

window.addEventListener('scroll', function() {
  let value = window.scrollY;
  let about = document.getElementById('aboutMeSection');
  let coolPic = document.getElementById('aboutMepic');
  let path1 = document.getElementById('path1');
  let path2 = document.getElementById('path2');
  let path3 = document.getElementById('path3');
  let path4 = document.getElementById('path4');


  let pathWork1 = document.getElementsByClassName('pathWork1')[0];

  let pathWork2 = document.getElementsByClassName('pathWork2')[0];

  let pathWork3 = document.getElementsByClassName('pathWork3')[0];

  let pathWork4 = document.getElementsByClassName('pathWork4')[0];

  let pathWork5 = document.getElementsByClassName('pathWork5')[0];

  let pathWork6 = document.getElementsByClassName('pathWork6')[0];

  let pathWork7 = document.getElementsByClassName('pathWork7')[0];

  let pathWork8 = document.getElementsByClassName('pathWork8')[0];


  if (window.innerWidth>800) {
    about.style.left = (value - 1400) + value * .75 + 'px';
  }

  else if (window.innerWidth<=800) {
    about.style.left = (value - 1400) + value * 1.5 + 'px';
  }

  path1.style.strokeDashoffset = value * -5 + 'px';
  path2.style.strokeDashoffset = value * 5 + 'px';
  path3.style.strokeDashoffset = value * 5 + 'px';
  path4.style.strokeDashoffset = value * 5 + 'px';
  if (value > 100 && value < 400) {
    gsap.to('#welcomeBanner', {
      transformOrigin: "0 0",
      scaleX: value * .005,
      scaleY: value * .005,
      opacity: value * (1 / value * 1.25)
    })
  } else if (value <= 100) {
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

gsap.to('#workSection', {
  scrollTrigger: {
    trigger: "#workSection",
    onEnter: function() {
      var element2 = document.getElementById("header");
      var element = document.getElementById("menuBar");
      var element3 = document.getElementById("svgWorkFlow");

      element3.style.display="block";

      element2.style.position="sticky";
      gsap.to(element,{y:"-200",duration:1});
      gsap.to(element2,{y:"-15",duration:.5},"-=105%");
    },
    onLeaveBack: function () {
      var element2 = document.getElementById("header");
      var element = document.getElementById("menuBar");
      var element3 = document.getElementById("svgWorkFlow");

      gsap.to(element,{y:"0",duration:1});
      element2.style.position="relative";
      element3.style.display="none";

      gsap.to(element2,{y:"0",duration:.75});
    },
    onLeave: function() {
      var element2 = document.getElementById("header");
      var element = document.getElementById("menuBar");
      var element3 = document.getElementById("svgWorkFlow");

      gsap.to(element,{y:"0",duration:1});
      element2.style.position="relative";
      element3.style.display="none";

      gsap.to(element2,{y:"0",duration:.75});
    },
    onEnterBack: function() {
      var element2 = document.getElementById("header");
      var element3 = document.getElementById("svgWorkFlow");
      var element = document.getElementById("menuBar");
      element3.style.display="block";
      gsap.to(element,{y:"-200",duration:1});
      gsap.to(element2,{y:"-15",duration:.5},"-=105%");
    },
    start:"top 5%",
    end:"bottom bottom"
  }
})

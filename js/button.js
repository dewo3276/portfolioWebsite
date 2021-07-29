var projectsInFile = ['.project1', '.project2', '.project3', '.project4', '.project5', '.project6', '.project7', '.project8', '.project9'];
var pos = document.getElementById("workSection").offsetTop;

function enlarge(className, type, index) {
  switch (type) {
    case 0:
      gsap.set(className, {
        transformOrigin: "0 0"
      });
      break;
    case 1:
      gsap.set(className, {
        transformOrigin: "50% 0"
      });
      break;
    case 2:
      gsap.set(className, {
        transformOrigin: "100% 0"
      });
      break;
    default:
      gsap.set(className, {
        transformOrigin: "0 0"
      });
  }
  gsap.timeline()
    .to(window, {scrollTo: pos, duration:.5})
    .to(className, {scaleX: "313%", scaleY: "265%", zIndex: 1, duration: 1})
    .to(className, {opacity: 0},'-=10%')
    .to('#WorkContent' + (index + 1), {display: "inline-grid", opacity: 1, duration: 1},'-=5%');

  for (let i = 0; i < projectsInFile.length; i++) {
    if (i != index) {
      gsap.to(projectsInFile[i], {opacity: 0, duration: 2});
    }
  }
}

function shrink(className, index) {
  gsap.timeline()
    .to(window, {scrollTo: pos, duration:.5})
    .to('#WorkContent' + (index + 1), {opacity: 0, display: "none"})
    .to(className, {opacity: 1},'-=20%')
    .to(className, {scaleX: "100%", scaleY: "100%", x: "0", backgroundColor: "none", zIndex: 0, duration: 1});

  for (let i = 0; i < projectsInFile.length; i++) {
    if(index!=i)
    {
      gsap.to(projectsInFile[i], {
        opacity: 1,
        delay: 1,
        duration: 2
      });
    }
  }
}

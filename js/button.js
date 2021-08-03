var projectsInFile = ['.project1', '.project2', '.project3', '.project4', '.project5', '.project6', '.project7', '.project8', '.project9', '.project10', '.project11', '.project12', '.project13', '.project14', '.project15', '.project16'];
var pos = document.getElementById("workSection").offsetTop;

function enlarge(className, type, index) {
  var pos2 = document.getElementsByClassName(className.substring(1))[0].offsetTop-(window.innerHeight*.1);

  switch (type) {
    case 0:
      gsap.set(className, {transformOrigin: "0% 0%"});
      break;
    case 1:
      gsap.set(className, {transformOrigin: "100% 0%"});
      break;
  }

  gsap.timeline()
    .to(window, {scrollTo: pos2, duration:.25})
    .to(className, {scaleX: "150%", scaleY: "150%", zIndex: 1, duration: 1})
    .to(className, {opacity: 0},'-=10%')
    .to(window, {scrollTo: pos, duration:.5})
    .to('#WorkContent' + (index + 1), {display: "block", opacity: 1, duration: 1},'-=5%');

  for (let i = 0; i < projectsInFile.length; i++) {
    if (i != index) {
      gsap.to(projectsInFile[i], {opacity: 0, duration: 2});
    }
  }
}

function shrink(className, index) {
  var pos2 = document.getElementsByClassName(className.substring(1))[0].offsetTop-(window.innerHeight*.1);

  gsap.timeline()
    .to(window, {scrollTo: pos2, duration:.5})
    .to('#WorkContent' + (index + 1), {opacity: 0, display: "none"},'-=10%')
    .to(className, {opacity: 1},'-=20%')
    .to(className, {scaleX: "100%", scaleY: "100%", backgroundColor: "none", zIndex: 0, duration: .2})
    .to(window, {scrollTo: pos, duration:.5})

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

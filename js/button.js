var projectsInFile = ['.project1', '.project2', '.project3', '.project4', '.project5', '.project6', '.project7', '.project8', '.project9', '.project10', '.project11', '.project12', '.project13', '.project14', '.project15', '.project16','.project17','.project18','.project19','.project20','.project21'];
var currentOpen = new isOpenedClass();

function enlarge(className, type, index, WorkSectionType) {

  switch (type) {
    case 0:
      gsap.set(className, {transformOrigin: "0% 0%"});
      break;
    case 1:
      gsap.set(className, {transformOrigin: "100% 0%"});
      break;
  }

  gsap.timeline()
    .to(className, {scaleX: "125%", scaleY: "125%", zIndex: 1, duration: .5},'<')
    .to(className, {opacity: 0},'-=25%')
    .to('#WorkContent' + (index + 1), {display: "block", opacity: 1, duration: 1},'-=15%')
    .to('#'+WorkSectionType,{display: "none"},'<')
    .to('.closingTime', {opacity: 1, duration: .5},'<');
  var pos = document.getElementById('header').offsetTop;
    gsap.to(window, {scrollTo: pos, duration:.5},'-=40%');

  for (let i = 0; i < projectsInFile.length; i++) {
    if (i != index) {
      gsap.to(projectsInFile[i], {opacity: 0, duration: 2});
    }
  }
  currentOpen.className=className;
  currentOpen.type=type;
  currentOpen.index=index;
  currentOpen.WorkSectionType=WorkSectionType;
}

function shrink() {

  document.getElementById(currentOpen.WorkSectionType).style.display="grid";

  gsap.timeline()
    .to('#WorkContent' + (currentOpen.index + 1), {opacity: 0, display: "none"},'-=50%')
    .to(currentOpen.className, {opacity: 1},'-=20%')
    .to(currentOpen.className, {scaleX: "100%", scaleY: "100%", backgroundColor: "none", zIndex: 0, duration: .2})
    .to('.closingTime', {opacity: 0, duration: .25},'>')

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

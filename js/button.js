var projectsInFile = ['.project1', '.project2', '.project3', '.project4', '.project5', '.project6', '.project7', '.project8', '.project9', '.project10', '.project11', '.project12', '.project13', '.project14', '.project15', '.project16','.project17','.project18','.project19','.project20','.project21'];
var currentOpen = new isOpenedClass();

function enlarge(className, index, WorkSectionType) {

  gsap.timeline()
    .to(className, {scaleX: "125%", scaleY: "125%", zIndex: 1, duration: .5})
    .to(className, {opacity: 0},'-=25%')
    .to('#WorkContent' + (index + 1), {display: "block", opacity: 1, duration: 1},'-=15%')
    .to('#overlay', {display: "block", opacity: .75, duration: .75},'-=75%')

  for (let i = 0; i < projectsInFile.length; i++) {
    if (i != index) {
      gsap.to(projectsInFile[i], {opacity: 0, duration: 2});
    }
  }
  currentOpen.className=className;
  currentOpen.index=index;
  currentOpen.WorkSectionType=WorkSectionType;
  document.body.style.overflowY="hidden";
}

function shrink() {

  document.getElementById(currentOpen.WorkSectionType).style.display="grid";

  gsap.timeline()
    .to('#WorkContent' + (currentOpen.index + 1), {opacity: 0, display: "none"},'-=50%')
    .to(currentOpen.className, {opacity: 1},'-=20%')
    .to(currentOpen.className, {scaleX: "100%", scaleY: "100%", backgroundColor: "none", zIndex: 0, duration: .2})
    .to('#overlay', {display: "none", opacity: 0, duration: .75},'-=75%')

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
  document.body.style.overflowY="visible";
}

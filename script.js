const crew = document.getElementById("crew");
const btn = document.getElementById("btn");
const launchpad = document.querySelector(".launchpad");


function launch() {
    crew.classList.add("slide-out-tl");
    countingDown();
}

btn.addEventListener("click", launch);


function countingDown() {
  let count = 2;

  const countdown = setInterval(() => {
    if (count === 0) {
      btn.style.display = "none";
      launchpad.style.backgroundColor = "transparent";
      launchpad.style.boxShadow = "none";
      launchpad.style.backgroundImage = "url('images/christmas.gif')";
      clearInterval();
    } else {
        count--;
    }
  }, 1000)
}
// TYPING ANIMATION

var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Designer",
    "MERN Stack Developer",
    "Front-end Developer",
    "Content Writer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

function navfunction() {
  const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"), // Select all <li> elements
    totalnavList = navList.length;

  for (let i = 0; i < totalnavList; i++) {
    const a = navList[i].querySelector("a"); // Select the <a> inside each <li>
    a.addEventListener("click", function () {
      // Remove 'active' class from all links
      for (let j = 0; j < totalnavList; j++) {
        navList[j].querySelector("a").classList.remove("active");
      }
      // Add 'active' class to the clicked link
      this.classList.add("active");
    });
  }
}

// Call the function once to set up the event listeners
navfunction();

function showPortfolio() {
  document.getElementById("portfolio-detailed").style.display = "block";
}

function hidePortfolio() {
  document.getElementById("portfolio-detailed").style.display = "none";
}

document.getElementById("openLink").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("videoPlayer").classList.toggle("hidden");
});

// function NavigatetoPage(){
//   window.location.href = "page.html";
// }

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}




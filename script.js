let toggleBtn = document.getElementById("toggle-btn");
let body = document.body;
let darkMode = localStorage.getItem("dark-mode");
const login = document.querySelector(".navbar");
const title = document.querySelector(".navbar-brand");
const menu = document.querySelector(".darkkk");


const boxes = document.querySelectorAll(".darkk");

const enableDarkMode = () => {
  toggleBtn.classList.replace("fa-sun", "fa-moon");
  body.classList.add("dark");

  title.classList.add("text-light");

  login.classList.add("bg-dark");
  login.classList.remove("bg-body-tertiary");

  boxes.forEach((box) => {
    box.style.backgroundColor = "rgb(36, 33, 33)";
    box.style.color = "white";
  });

  menu.classList.add("bg-white");


  localStorage.setItem("dark-mode", "enabled");
};




const disableDarkMode = () => {
  toggleBtn.classList.replace("fa-moon", "fa-sun");
  title.classList.remove("text-light");

  body.classList.remove("dark");
  localStorage.setItem("dark-mode", "disabled");

  login.classList.remove("bg-dark");
  login.classList.add("bg-body-tertiary");



  boxes.forEach((box) => {
    box.style.backgroundColor = "white";
    box.style.color = "rgb(36, 33, 33)";
  });
};

if (darkMode === "enabled") {
  enableDarkMode();
}

toggleBtn.onclick = (e) => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};

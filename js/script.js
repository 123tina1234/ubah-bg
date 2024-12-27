// Toggel class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu di ketik
document.querySelector("#hamburger-manu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-manu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    navbarNav.classList.remove("active");
  }
});

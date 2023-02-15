document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      });
    }
  };

  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  // Your code to run since DOM is loaded and ready
});

// js login logout

var urlLogInOut = document.getElementById("urlLogInOut");
var iLogInOut = document.getElementById("iLogInOut");
var spanLogInOut = document.getElementById("spanLogInOut");

console.log(urlLogInOut, iLogInOut, spanLogInOut);

const id_user = localStorage.getItem("id");
if (!id_user || id_user == 'null' || id_user == 'undefined') {
    urlLogInOut.setAttribute("href", "../users/login.php")
    iLogInOut.setAttribute("class", "bx bx-log-in nav_icon")
    spanLogInOut.innerHTML = "Login | Signup"
} else {
    urlLogInOut.setAttribute("href", "../users/logout.php")
    iLogInOut.setAttribute("class", "bx bx-log-out nav_icon")
    spanLogInOut.innerHTML = "Logout"
}

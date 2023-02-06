// Tim Frick
// script.js
// 5/5/2022
//Global variables
//Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
        var menuicon = document.getElementById("icon");
        if (navlinks.style.display === "block") {
            navlinks.style.display = "none";
            menuicon.style.color = "#ffffff";
        } else {
            navlinks.style.display = "block";
            menuicon.style.color = "#ffff00";
        }
}
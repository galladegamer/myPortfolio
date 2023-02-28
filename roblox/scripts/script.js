// Tim Frick
// script.js
// 5/5/2022
//Global variables
//Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
		var icon = document.getElementById("caw");
        if (navlinks.style.display === "block") {
            navlinks.style.display = "none";
			icon.style.backgroundImage = "linear-gradient(to top, #f2f3f3, #a1a5a2)";
        } 
		else {
            navlinks.style.display = "block";
			icon.style.backgroundImage = "linear-gradient(to bottom, #ffffff00, #ffffff00)";
			
        }
}
// Tim Frick
// script.js
// 5/5/2022
//Global variables
//Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
        var menuicon = document.getElementById("icon");
		var icon = document.getElementById("caw");
        if (navlinks.style.display === "block") {
            navlinks.style.display = "none";
            menuicon.style.color = "#000055";
			icon.style.backgroundImage = "linear-gradient(to bottom, #3355ffff, #77ccff)";
        } 
		else {
            navlinks.style.display = "block";
            menuicon.style.color = "#000099";
			icon.style.backgroundImage = "linear-gradient(to bottom, #3355ff00, #77ccff00)";
			
        }
}
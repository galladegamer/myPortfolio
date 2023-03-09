// JavaScript Document
function chbg(c1, c2, o1, o2, o3, o4, o5, s1, s2, s3, s4, s5) {
	var navigate = document.getElementById("navig");
	var link1 = document.getElementById("homLink");
	var link2 = document.getElementById("hisLink");
	var link3 = document.getElementById("ecoLink");
	var link4 = document.getElementById("lckLink");
	var link5 = document.getElementById("nwsLink");
	var icon = document.getElementById("icon");
	icon.style.color = c2;
    navigate.style.backgroundColor = c1;
	link1.style.color = c2;
	link2.style.color = c2;
	link3.style.color = c2;
	link4.style.color = c2;
	link5.style.color = c2;
	link1.style.opacity = o1;
	link2.style.opacity = o2;
	link3.style.opacity = o3;
	link4.style.opacity = o4;
	link5.style.opacity = o5;
	link1.style.fontSize = s1;
	link2.style.fontSize = s2;
	link3.style.fontSize = s3;
	link4.style.fontSize = s4;
	link5.style.fontSize = s5;
}  

function chbg2(c1, c2, o1, o2, o3, o4, o5, o6, s1, s2, s3, s4, s5) {
	var navigate = document.getElementById("mnav");
	var n2 = document.getElementById("caw")
	var link1 = document.getElementById("m1");
	var link2 = document.getElementById("m2");
	var link3 = document.getElementById("m3");
	var link4 = document.getElementById("m4");
	var link5 = document.getElementById("m5");
	var icon = document.getElementById("icon");
	icon.style.color = c2;
    navigate.style.backgroundColor = c1;
	n2.style.backgroundColor = c1;
	link1.style.color = c2;
	link2.style.color = c2;
	link3.style.color = c2;
	link4.style.color = c2;
	link5.style.color = c2;
	link1.style.opacity = o1;
	link2.style.opacity = o2;
	link3.style.opacity = o3;
	link4.style.opacity = o4;
	link5.style.opacity = o5;
	icon.style.opacity = o6;
	link1.style.fontSize = s1;
	link2.style.fontSize = s2;
	link3.style.fontSize = s3;
	link4.style.fontSize = s4;
	link5.style.fontSize = s5;
}  

function another(c1, c2, c3, c4, c5) {
	var link1 = document.getElementById("homLink");
	var link2 = document.getElementById("hisLink");
	var link3 = document.getElementById("ecoLink");
	var link4 = document.getElementById("lckLink");
	var link5 = document.getElementById("nwsLink");
	var icon = document.getElementById("icon");
	icon.style.color = c2;
	link1.style.color = c1;
	link2.style.color = c2;
	link3.style.color = c3;
	link4.style.color = c4;
	link5.style.color = c5;
}

function fchbg(c1, c2, o1, o2, o3, o4, o5, s1, s2, s3, s4, s5) {
	var navigate = document.getElementById("navig2");
	var link1 = document.getElementById("fhomLink");
	var link2 = document.getElementById("fhisLink");
	var link3 = document.getElementById("fecoLink");
	var link4 = document.getElementById("flckLink");
	var link5 = document.getElementById("fnwsLink");
	var icon = document.getElementById("icon");
	icon.style.color = c2;
    navigate.style.backgroundColor = c1;
	link1.style.color = c2;
	link2.style.color = c2;
	link3.style.color = c2;
	link4.style.color = c2;
	link5.style.color = c2;
	link1.style.opacity = o1;
	link2.style.opacity = o2;
	link3.style.opacity = o3;
	link4.style.opacity = o4;
	link5.style.opacity = o5;
	link1.style.fontSize = s1;
	link2.style.fontSize = s2;
	link3.style.fontSize = s3;
	link4.style.fontSize = s4;
	link5.style.fontSize = s5;
}  

function fanother(c1, c2, c3, c4, c5) {
	var link1 = document.getElementById("fhomLink");
	var link2 = document.getElementById("fhisLink");
	var link3 = document.getElementById("fecoLink");
	var link4 = document.getElementById("flckLink");
	var link5 = document.getElementById("fnwsLink");
	var icon = document.getElementById("icon");
	icon.style.color = c2;
	link1.style.color = c1;
	link2.style.color = c2;
	link3.style.color = c3;
	link4.style.color = c4;
	link5.style.color = c5;
}

function menu() {
    var navlinks = document.getElementById("nav-links");
        var menuicon = document.getElementById("icon");
		var icon = document.getElementById("caw");
        if (navlinks.style.display === "block") {
            navlinks.style.display = "none";
            menuicon.style.color = "#191923";
			icon.style.backgroundColor = "#C0C0C0";
        } 
		else {
            navlinks.style.display = "block";
            menuicon.style.color = "#191923";
			icon.style.backgroundColor = "#C0C0C0";
			
        }
}
function menu() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#262626";
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#4d4d4d";
    }
}

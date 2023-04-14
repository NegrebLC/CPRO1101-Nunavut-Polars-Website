function mobileNav() {
    var x = document.getElementById("nav");
    if (x.className === "nav_menu") {
      x.className += " responsive";
    } else {
      x.className = "nav_menu";
    }
}
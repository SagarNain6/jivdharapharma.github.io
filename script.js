document.addEventListener("DOMContentLoaded", function () {
    console.log("Jivdhara Pharma website loaded");

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "yellow";
        });
        link.addEventListener("mouseout", function () {
            this.style.color = "white";
        });
    });
});

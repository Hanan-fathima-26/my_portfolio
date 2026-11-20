// =================================
// HANAN PORTFOLIO - JAVASCRIPT
// =================================


// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});


// 2. CLOSE MENU AFTER SELECTING A SECTION

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("show");
    });

});


// 3. AUTOMATIC CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// 4. HIGHLIGHT THE CURRENT SECTION

const sections = document.querySelectorAll(".page");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const currentId = entry.target.id;

                navLinks.forEach(function (link) {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + currentId
                    ) {
                        link.classList.add("active");
                    }

                });

            }

        });

    },

    {
        root: null,
        threshold: 0.45
    }

);


// 5. WATCH ALL WEBSITE SECTIONS

sections.forEach(function (section) {
    observer.observe(section);
});

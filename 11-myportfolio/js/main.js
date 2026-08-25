// スクロールでふわっと表示する
const fadeSections = document.querySelectorAll(".fade-section");

const fadeObserver = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
    });
});

fadeSections.forEach((section) => {
    fadeObserver.observe(section);
})

// 現在の位置に応じてナビを変更

const section = document.querySelectorAll(
    "#about-area", "#work-area", "#skill-area", "#contact-area"
);

const navLinks = document.querySelectorAll("nav a");

const navObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) =>{
            if (entry.isIntersecting) {

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `nav a[href="#${entry.target.id}"]`
                );

                activeLink.classList.add("active");
            }
        });
    },
    {
        threshold: 0.5,
    }
    
);

section.forEach((section) => {
    navObserver.observe(section);
})
function ToggleMenu(){
    const menu=document.querySelector('.ham-links')
    const icon=document.querySelector('.ham-icon')
    menu.classList.toggle('open')
    icon.classList.toggle('open')
}

var tablinks=document.getElementsByClassName('tab-links')
var tabcontents=document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    for(tablink of tablinks){
        tablink.classList.remove('active-link')
    }
    document.getElementById(tabname).classList.add('active-tab');
    event.currentTarget.classList.add('active-link')
}
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});


if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Contact form submission (Mock function)
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Thank you for reaching out! I will get back to you soon.");
            contactForm.reset();
        });
    }



    const projectContainer = document.querySelector(".projects-container");
    if (projectContainer) {
        projects.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");
            projectCard.innerHTML = `
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            `;
            projectContainer.appendChild(projectCard);
        });
    }
});

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
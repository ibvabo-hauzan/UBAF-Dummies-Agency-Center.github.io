function addClassName(selector, addClass) {
    for(let i = 0; i < document.querySelectorAll(selector).length; i++) {
        document.querySelectorAll(selector)[i].className = document.querySelectorAll(selector)[i].className + " " + addClass 
    }
}
function rainbowMode(){
    if(document.getElementById("rainbow-btn").className = "rainbow-off") {
        addClassName('.navbar', "rainbow")
        addClassName('.card', "rainbow")
        addClassName('.sidebar', "dark-rainbow")
        addClassName('.in-card', "dark-rainbow")
        addClassName('.menu-link.active', "dark-rainbow")
        addClassName('.nav-accordion.active', "dark-rainbow")
        document.getElementById("rainbow-btn").className = "rainbow-on"
    } else {
        addClassName('.navbar', "rainbow")
        addClassName('.card', "rainbow")
        addClassName('.sidebar', "dark-rainbow")
        addClassName('.in-card', "dark-rainbow")
        addClassName('.menu-link.active', "dark-rainbow")
        addClassName('.nav-accordion.active', "dark-rainbow")
        document.getElementById("rainbow-btn").className = "rainbow-off"
    }
}
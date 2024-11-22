const megaMenu = document.getElementById("megaMenu");
const menuDisplay = document.getElementById("dropdown-menu");

megaMenu.addEventListener('focusin', function() {
    menuDisplay.classList.add("show");
});

menuDisplay.addEventListener('focusout', function(e) {
    if(!menuDisplay.contains(e.relatedTarget)){
        menuDisplay.classList.remove("show");
    }
});

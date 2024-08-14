
document.getElementById("menuButton").addEventListener("click", function() {
    const menuContents = document.querySelectorAll(".menuContent");
    
    menuContents.forEach(function(menu) {
        menu.classList.toggle("hidden");
    });
    
});



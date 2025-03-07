const sets = document.querySelectorAll('.set');



sets.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.opacity = "80%";  
    });
    image.addEventListener('mouseout', () => {
        image.style.opacity = "2%";  
    });
});

const cookie = document.getElementById("cookie")
var bite = new Audio('assets/music/chomp.mp3');

cookie.addEventListener("click", function() {
    bite.play();
    cookie.src = "assets/bearcookieATED.png"

})
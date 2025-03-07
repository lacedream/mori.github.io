const sets = document.querySelectorAll('.set');



sets.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.opacity = "80%";  
    });
    image.addEventListener('mouseout', () => {
        image.style.opacity = "2%";  
    });
});
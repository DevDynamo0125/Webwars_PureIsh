let button = document.getElementById('GALLERY');
let display = document.getElementById('display');

button.addEventListener('mouseover', function() {
    display.style.display = 'block';
    setTimeout(function() {
        display.style.display = 'none';
    }, 3000); // Display for 3 seconds
});

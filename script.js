// Get modal and buttons
var modal = document.getElementById("loginModal");
var loginBtn = document.querySelector(".login-btn");
var closeBtn = document.querySelector(".close-btn");

// Get sections
var homeSection = document.getElementById("homeSection");
var aboutSection = document.getElementById("aboutSection");

// Get navigation buttons
var homeBtn = document.querySelector(".home-btn");
var aboutBtn = document.querySelector(".about-btn");

// Show Home Section
homeBtn.onclick = function() {
    homeSection.style.display = "block";
    aboutSection.style.display = "none";
}

// Show About Section
aboutBtn.onclick = function() {
    aboutSection.style.display = "block";
    homeSection.style.display = "none";
}

// When the user clicks the login link, open the modal
loginBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

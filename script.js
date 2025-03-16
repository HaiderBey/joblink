document.addEventListener("DOMContentLoaded", function() {
    
    const indexButton = document.getElementById("indexBtn");
    const offersButton = document.getElementById("offersBtn");
    const signupButton = document.getElementById("signupBtn");
    const signinButton = document.getElementById("signinBtn");

    
    indexButton.addEventListener("click", function() {
        window.location.href = "index.html"; 
    });

    offersButton.addEventListener("click", function() {
        window.location.href = "offers.html"; 
    });

    signupButton.addEventListener("click", function() {
        window.location.href = "signup.html"; 
    });

    signinButton.addEventListener("click", function() {
        window.location.href = "signin.html"; 
    });
});
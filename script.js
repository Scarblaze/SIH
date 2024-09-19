
const loginButton = document.querySelector(".login-submit");
loginButton.addEventListener("click", function(event) {
    event.preventDefault();  
    window.location.href = "main.html";  
});


const newsLink = document.querySelector(".nav-link[href='#news']");
if (newsLink) {
    newsLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        window.location.href = "news.html";  
    });
}


const backToHomeButton = document.querySelector(".signup button");
if (backToHomeButton) {
    backToHomeButton.addEventListener("click", function(event) {
        event.preventDefault();  
        window.location.href = "home.html";  
    });
}

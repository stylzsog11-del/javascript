window.onload = function() {
    var visitorName = prompt("What is your name?");
    if (visitorName) {
        alert("Welcome to my site, " + visitorName + "!");
        document.querySelector("h1").textContent += " - Hello, " + visitorName + "!";
    }
};
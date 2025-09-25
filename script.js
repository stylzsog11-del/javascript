window.onload = function() {
    var visitorName = prompt("Welcome! What's your name?");
    if (visitorName) {
        alert("Hello, " + visitorName + "! Welcome to Myron Richardson's site.");
        document.getElementById("special").textContent = "Welcome, " + visitorName + "! © 2025 Myron Richardson";
    }
};

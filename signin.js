function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check credentials (replace this with your authentication logic)
    if (username === "design" && password === "720marketst") {
        // Redirect to projects.html upon successful login
        window.location.href = "projects.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

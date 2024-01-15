function authenticatePassword() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check credentials (replace this with your authentication logic)
    if (username === "d" && password === "7") {
        // Redirect to html upon successful login
        console.log("Redirecting...");
        window.location.href = "../pages/projects.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

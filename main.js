function startLogin() {
    let user = document.getElementById("user").value.trim();
    let pass = document.getElementById("pass").value;

    if (user !== "" && pass.length >= 5) {
        alert("Login successful for: " + user);
        window.location.href = "dashboard.html";
    } else {
        alert("Error: Please provide a valid username and a password with at least 5 characters.");
    }
}


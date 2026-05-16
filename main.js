function startLogin() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user !== "" && pass.length >= 5) {
        alert("Login successful for: " + user);
    } else {
        alert("Error: check username or password length");
    }

    if (user !== "" && pass.length >= 5) {
    window.location.href = "dashboard.html";
} 
    else {
    alert("Error: Invalid credentials");
}
}

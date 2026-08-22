// script index start
function button() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let peringatan = document.getElementById("peringatan");

    if (email === "" || password === "") {
        peringatan.innerHTML = "<p>Enter your account data first!</p>";

        setTimeout(function () {
            peringatan.innerHTML = "";
        }, 2500);

        return;
    };

    let saveEmail = localStorage.getItem("storageEmail");
    let savePassword = localStorage.getItem("storagePassword");

    if (email === saveEmail && password === savePassword) {
        alert("Login Successful!");
        window.location.href = "home.html";
    } else {
        peringatan.innerHTML = "<p>Login Failed</p>";

        setTimeout(function () {
            peringatan.innerHTML = "";
        }, 2500);
    }
};
// script index end

// script register start
function register() {
    let regEmail = document.getElementById("regEmail").value;
    let regPassword = document.getElementById("regPassword").value;
    let regPeringatan = document.getElementById("regPeringatan");

    if (regEmail === "" || regPassword === "") {
        regPeringatan.innerHTML = "<p>Enter your data first!</p>";

        setTimeout(function () {
            regPeringatan.innerHTML = "";
        }, 2500);

        return;
    };

    localStorage.setItem("storageEmail", regEmail);
    localStorage.setItem("storagePassword", regPassword);
    alert("Registered account successful!");
    window.location.href = "index.html";
}
// script register end
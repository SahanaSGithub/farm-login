// Sign Up Function
function signUp() {
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Sign Up Successful!");
            document.getElementById("user-info").innerText = "Signed up as: " + userCredential.user.email;
            showLogoutButton();
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Login Function
function logIn() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById("user-info").innerText = "Logged in as: " + userCredential.user.email;
            showLogoutButton();
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Logout Function
function logOut() {
    auth.signOut().then(() => {
        document.getElementById("user-info").innerText = "Logged out";
        document.getElementById("logout-btn").style.display = "none";
    }).catch((error) => {
        alert(error.message);
    });
}

// Show Logout Button After Login/Signup
function showLogoutButton() {
    document.getElementById("logout-btn").style.display = "block";
}



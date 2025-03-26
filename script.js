const auth = firebase.auth();

// Signup Function
function signUp() {
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Sign Up Successful!");
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
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Logout Function
function logOut() {
    auth.signOut().then(() => {
        document.getElementById("user-info").innerText = "Logged out";
    }).catch((error) => {
        alert(error.message);
    });
}

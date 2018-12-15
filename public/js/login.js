  // var firebase = require("firebase");
firebase.auth().onAuthStateChanged(function login (user) {

    if (user) {
        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";

        var user = firebase.auth().currentUser;

        if (user != null) {
            console.log("entrei");
           document.getElementById("user_div").innerHTML;
        }
   }
    else {
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    }
});

function login() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    console.log("TESTE");
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Erro: " + errorMessage );
    });
}

function logout() {
    console.log("to no logout");
    firebase.auth().signOut().then(function () {
    }).catch(function (error) {
    });
}

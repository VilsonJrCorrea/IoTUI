// var firebase = require("firebase/app");
// require("firebase/auth");
var firebase = require("firebase");
var lampadaAtual = 'lampadaOne';
var admin = require("firebase-admin");


function navOneClicada() {
    document.getElementById("navOne").style.background = "white";
    document.getElementById("navTwo").style.background = "none";
    lampadaAtual = 'lampadaOne';
    firebase.database().ref(lampadaAtual).on('value', function (snapshot) {
        let valor = snapshot.val();
        document.getElementById("barra").value = valor;
        let porcentagem = Math.round((100 * valor) / 255);
        document.getElementById("resposta").innerHTML = "Sua lâmpada está com " + porcentagem + "% de luminosidade";
    });
}

function navTwoClicada() {
    document.getElementById("navTwo").style.background = "white";
    document.getElementById("navOne").style.background = "none";
    lampadaAtual = 'lampadaTwo';
    firebase.database().ref(lampadaAtual).on('value', function (snapshot) {
        let valor = snapshot.val();
        document.getElementById("barra").value = valor;
        let porcentagem = Math.round((100 * valor) / 255);
        document.getElementById("resposta").innerHTML = "Sua lâmpada está com " + porcentagem + "% de luminosidade";
    });
}

function changeLabel() {
    var barraAux = barra = document.getElementById("barra").value;
    console.log(lampadaAtual);
    firebase.database().ref(lampadaAtual).set(barra);
    let porcentagem = Math.round((100 * barraAux) / 255);
    document.getElementById("resposta").innerHTML = "Sua lâmpada está com " + porcentagem + "% de luminosidade";
}


firebase.database().ref(lampadaAtual).on('value', function (snapshot) {
    console.log(snapshot.val());
});
firebase.database().ref.on("child_changed", function (snapshot) {
    console.log("---> " + snapshot.val());
});
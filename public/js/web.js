// var firebase = require("firebase/app");
// require("firebase/auth");
var firebase = require("firebase");
var lampadaAtual = 'lampadaOne';

function navOneClicada() {
    document.getElementById("navOne").style.background = "white";
    document.getElementById("navTwo").style.background = "none";
    lampadaAtual = 'lampadaOne';
}

function navTwoClicada() {
    document.getElementById("navTwo").style.background = "white";
    document.getElementById("navOne").style.background = "none";
    lampadaAtual = 'lampadaTwo';
}

function changeLabel() {
    var barraAux = barra = document.getElementById("barra").value;
    console.log(lampadaAtual);

    firebase.database().ref(lampadaAtual).set(barra);

    // var barraAux = document.getElementById("barra").value;
    let porcentagem = Math.round((100 * barraAux) / 255);
    // if (barra == 0) {
    //     document.getElementById("resposta").innerHTML = "Sua lâmpada está apagada";
    // } else {
    document.getElementById("resposta").innerHTML = "Sua lâmpada está com " + porcentagem + "% de luminosidade";
    // }
}

var barra = document.getElementById("barra").value;
firebase.database().ref(lampadaAtual).set(barra);
console.log(firebase.database().ref(lampadaAtual));


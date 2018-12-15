// var firebase = require("firebase/app");
// require("firebase/auth");
var firebase = require("firebase");

function changeLabel() {
    var barraAux = barra = document.getElementById("barra").value;
    firebase.database().ref('lampada').set(barra);
    // var barraAux = document.getElementById("barra").value;
    let porcentagem = Math.round((100 * barraAux) / 255);
    // if (barra == 0) {
    //     document.getElementById("resposta").innerHTML = "Sua lâmpada está apagada";
    // } else {
    document.getElementById("resposta").innerHTML = "Sua lâmpada está com " + porcentagem + "% de luminosidade";
    // }
}


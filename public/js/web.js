$(function () {
    console.log('pagina pronta');
    lampadaAtual = 'lampadaOne';
    updateBar();
});

var firebase = require("firebase");
var lampadaAtual = 'lampadaOne';
function navOneClicada() {
    document.getElementById("navOne").style.background = "#ffb4cc";
    document.getElementById("navTwo").style.background = "none";

    lampadaAtual = 'lampadaOne';
    updateBar();
}

function navTwoClicada() {
    document.getElementById("navTwo").style.background = "#ffb4cc";
    document.getElementById("navOne").style.background = "none";
    lampadaAtual = 'lampadaTwo';
    updateBar();
}

function changeLabel() {
    var barraAux = barra = document.getElementById("barra").value;
    console.log(lampadaAtual);
    firebase.database().ref(lampadaAtual).set(barra);
    let porcentagem = Math.round((100 * barraAux) / 255);
    document.getElementById("resposta").innerHTML = "Sua lâmpada está com " + porcentagem + "% de luminosidade";
}

function updateBar() {
    firebase.database().ref(lampadaAtual).on('value', function (snapshot) {
        let valor = snapshot.val();
        document.getElementById("barra").value = valor;
        let porcentagem = Math.round((100 * valor) / 255);
        document.getElementById("resposta").innerHTML = "Sua lâmpada está com " + porcentagem + "% de luminosidade";
    });
}

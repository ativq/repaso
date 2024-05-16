import {sumar} from "./operaciones.js"

$(document).ready(function(){


let numero1 = "";
let numero2 = "";

$("#btnEnviar").click(function(e){
    e.preventDefault();
    numero1 = $("#numero1").val();
    console.log(numero1);
})

$.ajax({
    url: 'https://digimon-api.vercel.app/api/digimon',
    type: 'GET',
    dataType: 'json',
    success: function(data){
        let nombreDigimones = [];
        $.each(data, function(index, digimon){
            nombreDigimones.push(digimon.name)
        })
        console.log(nombreDigimones);
    },
    error: function(error){
        console.error(error);
    }

})

//let btnEnviar = document.getElementById("btnEnviar");

//btnEnviar.addEventListener("click", (e)=> {
//    e.preventDefault();
//    numero1 = document.getElementById("numero1").value;
//
//    if(numero1 === ""){
//        console.log("Debe agregar un numero");
//        return;
//    }

//    console.log("Paso la prueba")
})

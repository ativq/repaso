



let nombre = "Alonso";
let edad = 19;
let vivo = true;

let avion ="";

let persona = {
    nombre: "Alonso",
    edad: 19,
    correo : function(){
        console.log("alo.gonzalezz@elmambo.cl")
    },
        
}


const getNombre = () => {
    console.log(nombre);
    console.log(typeof(edad));
    console.log(vivo);

    console.log("---------------");
    console.log(avion);
}

getNombre();
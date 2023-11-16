//declarar y definir variables
var user = traducir_opc(2); //eleji opcion papel
//random eleccion pc
var numeroAleatorio = Math.floor(Math.random() * 3) + 1;
var pc = traducir_opc(numeroAleatorio);
//generar mensage ganador
var msg_ganador = validarGanador();
//mostrar resultados
console.log(`User: ${user} vs Pc: ${pc}`);
console.log(msg_ganador);


//traducir la opcion elejida 1 = piedra; 2 = papel; 3 tijera;
function traducir_opc(opc) {
    switch (opc) {
        case 1:
            return "Piedra";
            break;
        case 2:
            return "Papel";
            break;
        case 3:
            return "Tijera";
            break;
    }
}

//validemos quien gana
function validarGanador() {
    if (user === pc) {
        return "Hay Empate!";
    } else if (user === "Papel" && pc === "Piedra" || user === "Piedra" && pc === "Tijera" || user === "Tijera" && pc === "Papel") {
        return "Ha ganado User!";
    } else if (pc === "Papel" && user === "Piedra" || pc === "Piedra" && user === "Tijera" || pc === "Tijera" && user === "Papel") {
        return "Ha ganado Pc!";
    }
}
//1. Genera las variables correspondientes
/*
Analisis
Dejar un Eleccion para usuario ó user;
Computadora eligira su propia opción;
Comparar ambas y validar Ganador.
Mostrar Elecciones de cada uno y Ganador.
*/

var user = "Piedra";
var pc = pc_opcion();
var msg_ganador = validarGanador();

console.log(`User saco: ${user}`);
console.log(`Pc saco: ${pc}`);
console.log(msg_ganador);


//2. Produce los condicionales que comparen tu resultado con el de la máquina u otra persona
/*
Eleccion === Eleccion -> Empate
Papel vs Piedra -> Hay Ganador y Perdedor
Piedra vs Tijera -> Hay Ganador y Perdedor
Tijera vs Papel -> Hay Ganador y Perdedor
*/

//3.Encapsula los condicionales en una función que reciba las variables, compararlas y retornar un valor.

//traducir la opcion de la maquina: 1 = piedra; 2 = papel; 3 tijera;
//no uso estructura switch por que no es parte del reto en clase actual
function pc_opcion() {
    var numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    var opc_pc = numeroAleatorio;
    if (opc_pc === 1) {
        return "Piedra";
    } else if (opc_pc === 2) {
        return "Papel";
    } else if (opc_pc === 3) {
        return "Tijera";
    }
}

//validemos quien gana
function validarGanador() {
    if (user === pc) {
        return "Hay empate!";
    } else if (user === "Papel" && pc === "Piedra" || user === "Piedra" && pc === "Tijera" || user === "Tijera" && pc === "Papel") {
        return "Ha ganado user!";
    } else if (pc === "Papel" && user === "Piedra" || pc === "Piedra" && user === "Tijera" || pc === "Tijera" && user === "Papel") {
        return "Ha ganado pc!";
    }
}
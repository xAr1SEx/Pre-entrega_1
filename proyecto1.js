// primera entrega del proyecto final(TRES EN RAYAS)


const prueba = [
    ["btn-1","btn-2","btn-3"],
    ["btn-4","btn-5","btn-6"],
    ["btn-7","btn-8","btn-9"]
]
const content = document.getElementById("content")
const currentDiv = document.getElementById("ganador");

for(let a=0; a<prueba.length; a++) {
    console.log("a",a)
    const newDiv = document.createElement("div");
    newDiv.classList.add(`juego_${a+1}`)
    newDiv.setAttribute("id", "botones")
    content.appendChild(newDiv);
    for(let b=0; b<prueba[a].length; b++){
        console.log(`[${a}][${b}]: ${prueba[a][b]}`)
        const newButton = document.createElement("button")
        newButton.setAttribute("id",prueba[a][b])
        newDiv.appendChild(newButton)
    }
}




const puntuacion = JSON.parse(localStorage.getItem("puntaje")) || {
    player_1:{victoria:0,derrota:0},player_2:{victoria:0,derrota:0}}
let victoria_1 = document.getElementById("victoria_1")
let victoria_2 = document.getElementById("victoria_2")
let derrota_1 = document.getElementById("derrota_1")
let derrota_2 = document.getElementById("derrota_2")
victoria_1.innerHTML = puntuacion.player_1.victoria
derrota_1.innerHTML = puntuacion.player_1.derrota
victoria_2.innerHTML = puntuacion.player_2.victoria
derrota_2.innerHTML = puntuacion.player_2.derrota
const uno = document.getElementById("btn-1")
const dos = document.getElementById("btn-2")
const tres = document.getElementById("btn-3")
const cuatro = document.getElementById("btn-4")
const cinco = document.getElementById("btn-5")
const seis = document.getElementById("btn-6")
const siete = document.getElementById("btn-7")
const ocho = document.getElementById("btn-8")
const nueve = document.getElementById("btn-9")
const player= document.getElementById("player")
let puntaje1 = document.getElementById("puntaje_1")
let puntaje2 = document.getElementById("puntaje_2")
let reiniciar = document.getElementById("reiniciar")
// jugador 1
// jugador 2
let turno = true
const objeto = {
    btn_1:false,
    btn_2:false,
    btn_3:false,
    btn_4:false,
    btn_5:false,
    btn_6:false,
    btn_7:false,
    btn_8:false,
    btn_9:false,
}
const disabled =() => {
uno.disabled = true
dos.disabled = true
tres.disabled = true
cuatro.disabled = true
cinco.disabled = true
seis.disabled = true
siete.disabled = true
ocho.disabled = true
nueve.disabled = true
}
const almacenamiento = (ganador) =>{
    if( ganador == "primer player ganador"){
        puntuacion.player_1.victoria += 1
        puntuacion.player_2.derrota += 1
        let puntaje = JSON.stringify(puntuacion);
        localStorage.setItem(`puntaje`, puntaje)
        let puntajeLocal1 = JSON.parse(localStorage.getItem(`puntaje`))
        victoria_1.innerHTML = puntajeLocal1.player_1.victoria
        derrota_1.innerHTML = puntajeLocal1.player_1.derrota
        victoria_2.innerHTML = puntajeLocal1.player_2.victoria
        derrota_2.innerHTML = puntajeLocal1.player_2.derrota
        console.log(puntajeLocal1.player_1.victoria)
        console.log(puntuacion.player_1)
    }
    else {
        puntuacion.player_1.derrota += 1
        puntuacion.player_2.victoria += 1
        let puntaje = JSON.stringify(puntuacion);
        localStorage.setItem(`puntaje`, puntaje)
        let puntajeLocal2 = JSON.parse(localStorage.getItem(`puntaje`))
        victoria_2.innerHTML = puntajeLocal2.player_2.victoria
        derrota_2.innerHTML = puntajeLocal2.player_2.derrota
        victoria_1.innerHTML = puntajeLocal2.player_1.victoria
        derrota_1.innerHTML = puntajeLocal2.player_1.derrota
        console.log(puntuacion.player_2)

    }

}
const combinacion_1 = () => {
    if(uno.innerHTML == "X" && dos.innerHTML == "X" && tres.innerHTML == "X" || (uno.innerHTML == "O" && dos.innerHTML == "O" && tres.innerHTML == "O")){
        if(uno.innerHTML == "X"){
            const ganador = "primer player ganador"
            player.innerHTML = ganador
            disabled()
            almacenamiento(ganador)
        }
        else {
            const ganador = "segundo player ganador"
            player.innerHTML = ganador
            disabled()
            almacenamiento(ganador)
        }
    }
}
const combinacion_2 = () => {
    if(uno.innerHTML == "X" && cuatro.innerHTML == "X" && siete.innerHTML == "X" || (uno.innerHTML == "O" && dos.innerHTML == "O" && tres.innerHTML == "O")){
        if(uno.innerHTML == "X"){
            player.innerHTML = "primer player ganador"
            disabled()
            almacenamiento()
        }
        else {
            player.innerHTML = "segundo player ganador"
            disabled()
            almacenamiento()
        }
    }
}
const combinacion_3 = () => {
    if(uno.innerHTML == "X" && cinco.innerHTML == "X" && nueve.innerHTML == "X" || (uno.innerHTML == "O" && cinco.innerHTML == "O" && nueve.innerHTML == "O"))
    if(uno.innerHTML == "X"){
     player.innerHTML = "primer player ganador"
        disabled()
        almacenamiento()
    }
    else {
     player.innerHTML = "segundo player ganador"
        disabled()
        almacenamiento()
    }
}
const combinacion_4 = () => {
    if(dos.innerHTML == "X" && cinco.innerHTML == "X" && ocho.innerHTML == "X" || (dos.innerHTML == "O" && cinco.innerHTML == "O" && ocho.innerHTML == "O")){
        if(dos.innerHTML == "X"){
            player.innerHTML = "primer player ganador"
            disabled()
            almacenamiento()
        }
        else {
            player.innerHTML = "segundo player ganador"
            disabled()
            almacenamiento()
        }
    }
}
const combinacion_5 = () => {
    if(tres.innerHTML == "X" && seis.innerHTML == "X" && nueve.innerHTML == "X" || (tres.innerHTML == "O" && seis.innerHTML == "O" && nueve.innerHTML == "O")){
        if(tres.innerHTML == "X"){
            player.innerHTML = "primer player ganador"
            disabled()
            almacenamiento()
        }
        else {
            player.innerHTML = "segundo player ganador"
            disabled()
            almacenamiento()
        }
    }
}
const combinacion_6 = () => {
    if(tres.innerHTML == "X" && cinco.innerHTML == "X" && siete.innerHTML == "X" || (tres.innerHTML == "O" && cinco.innerHTML == "O" && siete.innerHTML == "O")){
        if(tres.innerHTML == "X"){
            player.innerHTML = "primer player ganador"
            disabled()
            almacenamiento()
        }
        else {
            player.innerHTML = "segundo player ganador"
            disabled()
            almacenamiento()
        }
    }
}
const combinacion_7 = () => {
    if(cuatro.innerHTML == "X" && cinco.innerHTML =="X" && seis.innerHTML == "X" || (cuatro.innerHTML == "O" && cinco.innerHTML == "O" && seis.innerHTML == "O")){
        if(cuatro.innerHTML == "X" ){
            player.innerHTML = "primer player ganador"
            disabled()
            almacenamiento()
        }
        else {
            player.innerHTML = "segundo player ganador"
            disabled()
            almacenamiento()
        }
    }
}
const combinacion_8 =() => {
    if(siete.innerHTML == "X" && ocho.innerHTML =="X" && nueve.innerHTML == "X" || (siete.innerHTML == "O" && ocho.innerHTML == "O" && nueve.innerHTML == "O")){
        if(siete.innerHTML == "X" ){
            player.innerHTML = "primer player ganador"
            disabled()
            almacenamiento()
        }
        else {
            player.innerHTML = "segundo player ganador"
            disabled()
            almacenamiento()
        }
    }
}
player.innerHTML = "TURNO DEL PRIMER JUGADOR"
const empate = () => {
    if(uno.innerHTML !="" && dos.innerHTML != "" && tres.innerHTML != "" && cuatro.innerHTML != "" && cinco.innerHTML != "" && seis.innerHTML != "" && siete.innerHTML != "" && ocho.innerHTML != "" && nueve.innerHTML != "") {
        player.innerHTML = "EMPATE"
    }
}
reiniciar.addEventListener(`click`, () => {
   uno.innerHTML = ""
   dos.innerHTML = ""
   tres.innerHTML = ""
   cuatro.innerHTML = ""
   cinco.innerHTML = ""
   seis.innerHTML = ""
   siete.innerHTML = ""
   ocho.innerHTML = ""
   nueve.innerHTML = ""
   player.innerHTML = "TURNO DEL PRIMER JUGADOR"
   objeto.btn_1 = false;
   objeto.btn_2 = false;
   objeto.btn_3 = false;
   objeto.btn_4 = false;
   objeto.btn_5 = false;
   objeto.btn_6 = false;
   objeto.btn_7 = false;
   objeto.btn_8 = false;
   objeto.btn_9 = false;
   turno = true;
   uno.disabled = false;
   dos.disabled = false;
tres.disabled = false;
cuatro.disabled = false;
cinco.disabled = false;
seis.disabled = false;
siete.disabled = false;
ocho.disabled = false;
nueve.disabled = false;
})
uno.addEventListener("click", () => {
if(!objeto.btn_1){
    objeto.btn_1 = true;
if(turno) {
    player.innerHTML = "TURNO DEL SEGUNDO JUGADOR"
    uno.innerHTML = "X"
    turno = false;
}
else {
    player.innerHTML = "TURNO DEL PRIMER JUGADOR"
    uno.innerHTML = "O"
    turno = true;
}
combinacion_1();
combinacion_2();
combinacion_3();
empate();
}
})
dos.addEventListener("click", () => {
if(!objeto.btn_2){
    objeto.btn_2 = true;
    if(turno) {
        player.innerHTML = "TURNO DEL SEGUNDO JUGADOR"
        dos.innerHTML = "X"
        turno = false;
    }
    else {
        player.innerHTML = "TURNO DEL PRIMER JUGADOR"
        dos.innerHTML = "O"
        turno = true;
    }
combinacion_1();
combinacion_4();
empate();
}
})
tres.addEventListener("click", () => {
    if(!objeto.btn_3){
        objeto.btn_3 = true;
    if(turno) {
        player.innerHTML = "TURNO DEL SEGUNDO JUGADOR"
        tres.innerHTML = "X"
        turno = false;
    }
    else {
        player.innerHTML = "TURNO DEL PRIMER JUGADOR"
        tres.innerHTML = "O"
        turno = true;
    }
combinacion_1();
combinacion_5();
combinacion_6();
empate();
}
})
cuatro.addEventListener("click", () => {
    if(!objeto.btn_4){
        objeto.btn_4 = true;
    if(turno) {
        player.innerHTML = "TURNO DEL SEGUNDO JUGADOR"
        cuatro.innerHTML = "X"
        turno = false;
    }
    else {
        player.innerHTML = "TURNO DEL PRIMER JUGADOR"
        cuatro.innerHTML = "O"
        turno = true;
    }
combinacion_2();
combinacion_7();
empate();
}
})
cinco.addEventListener("click", () => {
    if(!objeto.btn_5){
        objeto.btn_5 = true;
    if(turno) {
        player.innerHTML = "TURNO DEL SEGUNDO JUGADOR"
        cinco.innerHTML = "X"
        turno = false;
    }
    else {
        player.innerHTML = "TURNO DEL PRIMER JUGADOR"
        cinco.innerHTML = "O"
        turno = true;
    }
combinacion_7();
combinacion_4();
combinacion_3();
combinacion_6();
empate();
}

})
seis.addEventListener("click", () => {
    if(!objeto.btn_6){
        objeto.btn_6 = true;
    if(turno) {
        player.innerHTML = "TURNO DEL SEGUNDO JUGADOR"
        seis.innerHTML = "X"
        turno = false;
    }
    else {
        player.innerHTML = "TURNO DEL PRIMER JUGADOR"
        seis.innerHTML = "O"
        turno = true;
    }
combinacion_7();
combinacion_5();
empate();
}
})
siete.addEventListener("click", () => {
    if(!objeto.btn_7){
        objeto.btn_7 = true;
        if(turno) {
            player.innerHTML = "TURNO DEL SEGUNDO JUGADOR"
            siete.innerHTML = "X"
            turno = false;
        }
        else {
            player.innerHTML = "TURNO DEL PRIMER JUGADOR"
            siete.innerHTML = "O"
            turno = true;
        }
combinacion_8();
combinacion_2();
combinacion_6();
empate();
    }
})
ocho.addEventListener("click", () => {
    if(!objeto.btn_8){
        objeto.btn_8 = true;
        if(turno) {
            player.innerHTML = "TURNO DEL SEGUNDO JUGADOR"
            ocho.innerHTML = "X"
            turno = false;
        }
        else {
            player.innerHTML = "TURNO DEL PRIMER JUGADOR"
            ocho.innerHTML = "O"
            turno = true;
        }
combinacion_8();
combinacion_4();
empate();
    }
    
})
nueve.addEventListener("click", () => {
    if(!objeto.btn_9){
        objeto.btn_9 = true;
        if(turno) {
            nueve.innerHTML = "X"
            turno = false;
        }
        else {
            nueve.innerHTML = "O"
            turno = true;
        }
combinacion_8();
combinacion_3();
empate();
    }
})
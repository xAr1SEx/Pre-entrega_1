const uno = document.getElementById("btn-1")
const dos = document.getElementById("btn-2")
const tres = document.getElementById("btn-3")
const cuatro = document.getElementById("btn-4")
const cinco = document.getElementById("btn-5")
const seis = document.getElementById("btn-6")
const siete = document.getElementById("btn-7")
const ocho = document.getElementById("btn-8")
const nueve = document.getElementById("btn-9")
let player= document.getElementById("player")



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
const combinacion_1 = () => {
    if(uno.innerHTML == "X" && dos.innerHTML == "X" && tres.innerHTML == "X" || (uno.innerHTML == "O" && dos.innerHTML == "O" && tres.innerHTML == "O")){
        if(uno.innerHTML == "X"){
            player.innerHTML = "primer player ganador"
            disabled()
        }
        else {
            player.innerHTML = "segundo player ganador"
            disabled()
        }
    }
}
const combinacion_2 = () => {
    if(uno.innerHTML == "X" && cuatro.innerHTML == "X" && siete.innerHTML == "X" || (uno.innerHTML == "O" && dos.innerHTML == "O" && tres.innerHTML == "O")){
        if(uno.innerHTML == "X"){
            player.innerHTML = "primer player ganador"
            disabled()
        }
        else {
            player.innerHTML = "segundo player ganador"
            disabled()
        }
    }
}
const combinacion_3 = () => {
    if(uno.innerHTML == "X" && cinco.innerHTML == "X" && nueve.innerHTML == "X" || (uno.innerHTML == "O" && cinco.innerHTML == "O" && nueve.innerHTML == "O"))
    if(uno.innerHTML == "X"){
     player.innerHTML = "primer player ganador"
        disabled()
    }
    else {
     player.innerHTML = "segundo player ganador"
        disabled()
    }
}
const combinacion_4 = () => {
    if(dos.innerHTML == "X" && cinco.innerHTML == "X" && ocho.innerHTML == "X" || (dos.innerHTML == "O" && cinco.innerHTML == "O" && ocho.innerHTML == "O")){
        if(dos.innerHTML == "X"){
            player.innerHTML = "primer player ganador"
            disabled()
        }
        else {
            player.innerHTML = "segundo player ganador"
            disabled()
        }
    }
}
const combinacion_5 = () => {
    if(tres.innerHTML == "X" && seis.innerHTML == "X" && nueve.innerHTML == "X" || (tres.innerHTML == "O" && seis.innerHTML == "O" && nueve.innerHTML == "O")){
        if(tres.innerHTML == "X"){
            player.innerHTML = "primer player ganador"
            disabled()
        }
        else {
            player.innerHTML = "segundo player ganador"
            disabled()
        }
    }
}
const combinacion_6 = () => {
    if(tres.innerHTML == "X" && cinco.innerHTML == "X" && siete.innerHTML == "X" || (tres.innerHTML == "O" && cinco.innerHTML == "O" && siete.innerHTML == "O")){
        if(tres.innerHTML == "X"){
            player.innerHTML = "primer player ganador"
            disabled()
        }
        else {
            player.innerHTML = "segundo player ganador"
            disabled()
        }
    }
}
const combinacion_7 = () => {
    if(cuatro.innerHTML == "X" && cinco.innerHTML =="X" && seis.innerHTML == "X" || (cuatro.innerHTML == "O" && cinco.innerHTML == "O" && seis.innerHTML == "O")){
        if(cuatro.innerHTML == "X" ){
            player.innerHTML = "primer player ganador"
            disabled()
        
        }
        else {
            player.innerHTML = "segundo player ganador"
            disabled()
        }
    }
}
const combinacion_8 =() => {
    if(siete.innerHTML == "X" && ocho.innerHTML =="X" && nueve.innerHTML == "X" || (siete.innerHTML == "O" && ocho.innerHTML == "O" && nueve.innerHTML == "O")){
        if(siete.innerHTML == "X" ){
            player.innerHTML = "primer player ganador"
            disabled()
        }
        else {
            player.innerHTML = "segundo player ganador"
            disabled()
        }
    }
}
player.innerHTML = "TURNO DEL PRIMER JUGADOR"
const empate = () => {
    if(uno.innerHTML !="" && dos.innerHTML != "" && tres.innerHTML != "" && cuatro.innerHTML != "" && cinco.innerHTML != "" && seis.innerHTML != "" && siete.innerHTML != "" && ocho.innerHTML != "" && nueve.innerHTML != "") {
        player.innerHTML = "EMPATE"
    }
}
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

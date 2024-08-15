// el juego selecciona un numero al azar que sería la partida de la máquina
let numRandom = Math.floor(Math.random()*100) + 1  // se pone + 1 para que no sea de 0 a 99 sino de 0 a 100 y floor es redondeo por debajo de la cifra

let numeroEntrada = document.getElementById('numeroEntrada')

let mensaje = document.getElementById('mensaje')

let intento = document.getElementById('intento')

let intentos = 0

// Esta acción se ejecuta al dar click en el boton click aquí
function check(){
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)  // parseint es para convertir string de html a numero

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){  // || simbolo condicional de O, isNaN es por si se digita algo que no sea un numero
        mensaje.textContent = 'Introduce un número válido entre 1 y 100'
        return  // para salir de esta función, es el final de este bloque
    }

    if(numeroIngresado == numRandom){
        mensaje.textContent = 'Felicitaciones, adivinaste el número, eres el GANADOR';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
        if(intentos < 10){
            puntaje.textContent = 'Resultado 100 puntos ¡PERFECTO!'
        }else {
            puntaje.textContent = 'Sigue jugando, puedes alcanzar el puntaje máximo'
        }
    } else if(numeroIngresado < numRandom){
        mensaje.textContent = 'Intentalo de nuevo, el número es mayor';
        mensaje.style.color = 'red';
    } else{
        mensaje.textContent = 'Intentalo de nuevo, el número es menor';
        mensaje.style.color = 'red';
    }
}
function cargar(){
    location.reload();
}
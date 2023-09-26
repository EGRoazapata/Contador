let contadorElemento = window.document.getElementById("contador");
let botonSumar = window.document.getElementById("sumar");
let botonRestar = window.document.getElementById("restar");
let botonResetear = window.document.getElementById("reset");


let contador = 0;

function actualizarContador() {
    contadorElemento.textContent = contador;
}

botonSumar.addEventListener("click", function() {
    contador++;
    actualizarContador();
});

botonRestar.addEventListener("click", function() {
    contador--;
    actualizarContador();
});

botonResetear.addEventListener("click", function() {
    contador = 0;
    actualizarContador();
});

actualizarContador();
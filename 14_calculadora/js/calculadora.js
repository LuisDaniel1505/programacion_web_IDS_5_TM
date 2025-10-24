const calculadora = document.querySelector('.calculator');
const pantalla = document.querySelector('.display');
const contenedorHistorial = document.querySelector('.display-history');

let numeroActual = '0';
let numeroAnterior = null;
let operacion = null;
let error = false;

function actualizarPantalla() {
    pantalla.textContent = numeroActual;
}

function agregarAlHistorial(texto) {
    if (contenedorHistorial) {
        const renglon = document.createElement('div');
        renglon.textContent = texto;
        contenedorHistorial.appendChild(renglon);
    }
}

function limpiarTodo() {
    numeroActual = '0';
    numeroAnterior = null;
    operacion = null;
    error = false;
    actualizarPantalla();
}

function mostrarError() {
    numeroActual = 'Error';
    error = true;
    actualizarPantalla();
}

function agregarDigito(digito) {
    if (error === true) {
        return; //alternativa que encontre para escribir menos if
    }

    if (numeroActual === '0') {
        numeroActual = digito;
    } else {
        numeroActual = numeroActual + digito;
    }

    actualizarPantalla();
}

function definirOperacion(simbolo) {
    if (error === true) {
        return;
    }

    if (numeroAnterior === null) {
        numeroAnterior = Number(numeroActual);
        operacion = simbolo;
        numeroActual = '0';
    } else if (numeroActual === '0') {
        operacion = simbolo;
    } else {
        realizarCalculo();
        numeroAnterior = Number(numeroActual);
        operacion = simbolo;
        numeroActual = '0';
    }
}

function borrarUltimo() {
    if (error === true) {
        return;
    }

    if (numeroActual.length > 1) {
        numeroActual = numeroActual.substring(0, numeroActual.length - 1);
    } else {
        numeroActual = '0';
    }

    actualizarPantalla();
}

function realizarCalculo() {
    if (error === true) {
        return;
    }

    if (operacion === null || numeroAnterior === null) {
        return;
    }

    const a = numeroAnterior;
    const b = Number(numeroActual);
    let resultado;

    if (operacion === '/' && b === 0) {
        agregarAlHistorial(String(a) + " / " + String(b) + " = Error");
        mostrarError();
        return;
    }

    switch (operacion) {
        case '+':
            resultado = a + b;
            break;
        case '-':
            resultado = a - b;
            break;
        case '*':
            resultado = a * b;
            break;
        case '/':
            resultado = a / b;
            break;
        default:
            agregarAlHistorial("Operación inválida");
            mostrarError();
            return;
    }

    if (!isFinite(resultado) || isNaN(resultado)) {
        agregarAlHistorial("Error en el cálculo");
        mostrarError();
    } else {
        agregarAlHistorial(String(a) + " " + operacion + " " + String(b) + " = " + String(resultado));
        numeroActual = String(resultado);
        numeroAnterior = null;
        operacion = null;
        actualizarPantalla();
    }
}

calculadora.addEventListener('click', function (e) {
    const boton = e.target;

    if (boton.tagName === 'BUTTON') {
        const texto = boton.textContent;

        if (texto === 'C') {
            limpiarTodo();
        } else if (texto === '=') {
            realizarCalculo();
        } else if (texto === '+' || texto === '-' || texto === '*' || texto === '/') {
            definirOperacion(texto);
        } else {
            agregarDigito(texto);
        }
    }
});

document.addEventListener('keydown', function (e) {
    const tecla = e.key;

    if ('0123456789'.includes(tecla)) {
        agregarDigito(tecla);
    } else if (tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/') {
        definirOperacion(tecla);
    } else if (tecla === 'Enter' || tecla === '=') {
        e.preventDefault();
        realizarCalculo();
    } else if (tecla === 'Escape' || tecla === 'c' || tecla === 'C') {
        limpiarTodo();
    } else if (tecla === 'Backspace') {
        borrarUltimo();
    }
});

actualizarPantalla();

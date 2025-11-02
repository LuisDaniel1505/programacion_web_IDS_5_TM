import {
    getNumeroActual, limpiarTodo, agregarDigito, definirOperacion, borrarUltimo, realizarCalculo
} from './math.js';

import {
    getCalculadoraNodo, actualizarPantalla, agregarAlHistorial, renderizarHistorialInicial
} from './ui.js';

import { limpiarHistorial } from './storage.js';
import { vaciarHistorial } from './ui.js';

window.onload = function () {
    renderizarHistorialInicial();
    actualizarPantalla(getNumeroActual());
};

const calculadora = getCalculadoraNodo();
calculadora.addEventListener('click', function (e) {
    const boton = e.target;

    if (boton.tagName === 'BUTTON') {
        const texto = boton.textContent;

        if (texto === 'C') {
            limpiarTodo();
            actualizarPantalla(getNumeroActual());
        } else if (texto === '=') {
            const resultado = realizarCalculo();
            actualizarPantalla(resultado.display);
            if (resultado.history) {
                agregarAlHistorial(resultado.history);
            }
        } else if (texto === '+' || texto === '-' || texto === '*' || texto === '/') {
            definirOperacion(texto);
            actualizarPantalla(getNumeroActual());
        } else {
            agregarDigito(texto);
            actualizarPantalla(getNumeroActual());
        }
    }
});

document.addEventListener('keydown', function (e) {
    const tecla = e.key;

    if ('0123456789'.includes(tecla)) {
        agregarDigito(tecla);
        actualizarPantalla(getNumeroActual());
    } else if (tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/') {
        definirOperacion(tecla);
        actualizarPantalla(getNumeroActual());
    } else if (tecla === 'Enter' || tecla === '=') {
        e.preventDefault();
        const resultado = realizarCalculo();
        actualizarPantalla(resultado.display);
        if (resultado.history) {
            agregarAlHistorial(resultado.history);
        }
    } else if (tecla === 'Escape' || tecla === 'c' || tecla === 'C') {
        limpiarTodo();
        actualizarPantalla(getNumeroActual());
    } else if (tecla === 'Backspace') {
        borrarUltimo();
        actualizarPantalla(getNumeroActual());
    }
});

const btnClearHistory = document.querySelector('.clear-history');
if (btnClearHistory) {
    btnClearHistory.addEventListener('click', function () {
        limpiarHistorial();
        vaciarHistorial();
    });
}

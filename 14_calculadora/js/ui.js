import { guardarLineaHistorial, cargarHistorial } from './storage.js';

const calculadora = document.querySelector('.calculator');
const pantalla = document.querySelector('.display');
const contenedorHistorial = document.querySelector('.display-history');

export function getCalculadoraNodo() {
    return calculadora;
}

export function actualizarPantalla(valor) {
    pantalla.textContent = valor;
}

export function agregarAlHistorial(texto) {
    if (!texto) {
        return;
    }
    if (contenedorHistorial) {
        const renglon = document.createElement('div');
        renglon.textContent = texto;
        contenedorHistorial.appendChild(renglon);
    }
    guardarLineaHistorial(texto);
}

export function renderizarHistorialInicial() {
    const historial = cargarHistorial();
    if (contenedorHistorial && historial.length > 0) {
        contenedorHistorial.innerHTML = '';
        historial.forEach(function (linea) {
            const renglon = document.createElement('div');
            renglon.textContent = linea;
            contenedorHistorial.appendChild(renglon);
        });
    }
}

export function vaciarHistorial() {
    const contenedorHistorial = document.querySelector('.display-history');
    if (contenedorHistorial) {
        contenedorHistorial.innerHTML = '';
    }
}


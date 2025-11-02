import { crearTarea } from './tareas.js';
import { cargarTareas } from './ui.js';

const input = document.querySelector('.input');
const btnAdd = document.querySelector('.btn-add');
const form = document.querySelector('.add');

window.onload = function () {
    cargarTareas();
};

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        agregarDesdeInput();
    });
}

btnAdd.addEventListener('click', function () {
    agregarDesdeInput();
});

function agregarDesdeInput() {
    const texto = input.value.trim();
    if (texto === '') {
        return;
    }
    crearTarea(texto);
    cargarTareas();
    input.value = '';
}

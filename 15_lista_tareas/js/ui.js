import { getTareas, cambiarEstado, eliminarTarea } from './tareas.js';

const lista = document.querySelector('.list');

export function cargarTareas() {
    lista.innerHTML = '';

    getTareas().forEach(function (tarea) {
        const div = document.createElement('div');
        div.classList.add('item');
        div.setAttribute('data-id', tarea.id);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('check');
        checkbox.checked = tarea.terminada;

        const label = document.createElement('label');
        label.classList.add('task-text');
        label.textContent = tarea.texto;

        if (tarea.terminada === true) {
            const span = document.createElement('span');
            span.classList.add('complete');
            span.textContent = 'Hecha';
            div.appendChild(span);
        }

        const btnDel = document.createElement('button');
        btnDel.textContent = 'Eliminar';
        btnDel.classList.add('btn-del');

        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(btnDel);
        lista.appendChild(div);

        checkbox.addEventListener('change', function (e) {
            cambiarEstado(e.target.checked, tarea.id);
            cargarTareas();
        });

        btnDel.addEventListener('click', function () {
            eliminarTarea(tarea.id);
            cargarTareas();
        });
    });
}

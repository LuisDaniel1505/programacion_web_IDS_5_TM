const lista = document.querySelector('.list');
const input = document.querySelector('.input');
const btnAdd = document.querySelector('.btn-add');

let tareas = [];

window.onload = function () {
    const data = localStorage.getItem('tareas');
    if (data !== null) {
        tareas = JSON.parse(data);
        cargarTareas();
    }
};

function guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

function cargarTareas() {
    lista.innerHTML = '';

    tareas.forEach(function (tarea) {
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
            cambiarEstado(e, tarea.id);
        });

        btnDel.addEventListener('click', function (e) {
            eliminarTarea(tarea.id);
        });
    });
}

function Id() {
    let contador = localStorage.getItem('id');

    if (contador === null) {
        contador = 1;
    } else {
        contador = parseInt(contador) + 1;
    }

    localStorage.setItem('id', contador);
    return contador;
}


btnAdd.addEventListener('click', function () {
    const texto = input.value.trim();

    if (texto === '') {
        return;
    }

    const nuevaTarea = {
        id: Id(),
        texto: texto,
        terminada: false
    };

    tareas.push(nuevaTarea);
    guardarTareas();
    cargarTareas();

    input.value = '';
});

function cambiarEstado(e, id) {
    const tarea = tareas.find(function (tarea) {
        return tarea.id === id;
    });

    if (tarea != null) {
        tarea.terminada = e.target.checked;
        guardarTareas();
        cargarTareas();
    }
}

function eliminarTarea(id) {
    tareas = tareas.filter(function (tarea) {
        return tarea.id !== id;
    });
    guardarTareas();
    cargarTareas();
}

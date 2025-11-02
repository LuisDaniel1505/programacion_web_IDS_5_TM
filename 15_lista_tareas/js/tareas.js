// tareas.js
import { obtenerTareas, guardarTareas, generarId } from './storage.js';

let tareas = obtenerTareas();

export function getTareas() {
    return tareas;
}

export function crearTarea(texto) {
    const nuevaTarea = {
        id: generarId(),
        texto: texto,
        terminada: false
    };
    tareas.push(nuevaTarea);
    guardarTareas(tareas);
    return nuevaTarea;
}

export function cambiarEstado(checked, id) {
    const tarea = tareas.find(function (t) {
        return t.id === id;
    });
    if (tarea != null) {
        tarea.terminada = checked;
        guardarTareas(tareas);
    }
}

export function eliminarTarea(id) {
    tareas = tareas.filter(function (t) {
        return t.id !== id;
    });
    guardarTareas(tareas);
}

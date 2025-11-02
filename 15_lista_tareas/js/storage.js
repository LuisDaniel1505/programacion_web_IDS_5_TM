export function obtenerTareas() {
    const data = localStorage.getItem('tareas');
    if (data !== null) {
        return JSON.parse(data);
    }
    return [];
}

export function guardarTareas(tareas) {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

export function generarId() {
    let contador = localStorage.getItem('id');
    if (contador === null) {
        contador = 1;
    } else {
        contador = parseInt(contador, 10) + 1;
    }
    localStorage.setItem('id', contador);
    return contador;
}

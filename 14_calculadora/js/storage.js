const id = 'calc_historial';

export function cargarHistorial() {
    const data = localStorage.getItem(id);
    if (data !== null) {
        try {
            const arr = JSON.parse(data);
            if (Array.isArray(arr)) {
                return arr;
            }
        } catch (e) {}
    }
    return [];
}

export function guardarLineaHistorial(linea) {
    const historial = cargarHistorial();
    historial.push(linea);
    localStorage.setItem(id, JSON.stringify(historial));
}

export function limpiarHistorial() {
    localStorage.removeItem('calc_historial');
}
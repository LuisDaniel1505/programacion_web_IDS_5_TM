let numeroActual = '0';
let numeroAnterior = null;
let operacion = null;
let error = false;

export function getNumeroActual() {
    return numeroActual;
}

export function limpiarTodo() {
    numeroActual = '0';
    numeroAnterior = null;
    operacion = null;
    error = false;
    return numeroActual;
}

export function mostrarError() {
    numeroActual = 'Error';
    error = true;
    return numeroActual;
}

export function agregarDigito(digito) {
    if (error === true) {
        return numeroActual;
    }
    if (numeroActual === '0') {
        numeroActual = digito;
    } else {
        numeroActual = numeroActual + digito;
    }
    return numeroActual;
}

export function definirOperacion(simbolo) {
    if (error === true) {
        return numeroActual;
    }

    if (numeroAnterior === null) {
        numeroAnterior = Number(numeroActual);
        operacion = simbolo;
        numeroActual = '0';
    } else if (numeroActual === '0') {
        operacion = simbolo;
    } else {
        const info = realizarCalculo();
        numeroAnterior = Number(numeroActual);
        operacion = simbolo;
        numeroActual = '0';
        return info.display;
    }
    return numeroActual;
}

export function borrarUltimo() {
    if (error === true) {
        return numeroActual;
    }

    if (numeroActual.length > 1) {
        numeroActual = numeroActual.substring(0, numeroActual.length - 1);
    } else {
        numeroActual = '0';
    }
    return numeroActual;
}

export function realizarCalculo() {
    if (error === true) {
        return { display: numeroActual, history: null };
    }

    if (operacion === null || numeroAnterior === null) {
        return { display: numeroActual, history: null };
    }

    const a = numeroAnterior;
    const b = Number(numeroActual);
    let resultado;

    if (operacion === '/' && b === 0) {
        const hist = String(a) + " / " + String(b) + " = Error";
        mostrarError();
        return { display: numeroActual, history: hist };
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
            const mensaje = "Operación inválida";
            mostrarError();
            return { display: numeroActual, history: mensaje };
    }

    if (!isFinite(resultado) || isNaN(resultado)) {
        const mensaje2 = "Error en el cálculo";
        mostrarError();
        return { display: numeroActual, history: mensaje2 };
    } else {
        const linea = String(a) + " " + operacion + " " + String(b) + " = " + String(resultado);
        numeroActual = String(resultado);
        numeroAnterior = null;
        operacion = null;
        return { display: numeroActual, history: linea };
    }
}

let menu;

do {

    let n1;
    let n2;
    let operacion;

    menu = Number(prompt("Ingresa la opcion: \n" +
        "1- Suma\n" +
        "2- Resta\n" +
        "3- Multiplicación\n" +
        "4- División\n" +
        "0- Salir"
    ));

    if (menu === 0) {
        console.log("Programa finalizado");
        break;
    }

    n1 = Number(prompt("Ingresa el primer número: "));
    n2 = Number(prompt("Ingresa el segundo número: "));

    switch (menu) {
        case 1:
            operacion = n1 + n2;
            console.log("El resultado de la suma es: " + operacion);
            break;
        case 2:
            operacion = n1 - n2;
            console.log("El resultado de la resta es: " + operacion);
            break;
        case 3:
            operacion = n1 * n2;
            console.log("El resultado de la multiplicación es: " + operacion);
            break;
        case 4:
            if (n2 !== 0) {
                operacion = n1 / n2;
                console.log("El resultado de la división es: " + operacion);
            } else {
                console.log("No se puede dividir entre 0");
            }
            break;

        default:
            console.log("Opcion no válida, vuelve a intentar");
            break;
    }
} while (menu !== 0)

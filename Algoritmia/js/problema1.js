function problema1() {
    // Obtener el valor del input y eliminar espacios en blanco al inicio y al final
    let input = document.querySelector('#p1-input').value.trim();

    // Verificar si el input está vacío después de eliminar los espacios en blanco
    if (input === "") {
        // Mostrar un mensaje de error si el input está vacío
        document.getElementById("p1-output").textContent = "Por favor, ingresa al menos dos palabras separadas por un espacio.";
        return; // Salir de la función sin continuar
    }

    // Dividir el input en palabras usando el espacio como separador
    let palabras = input.split(' ');

    // Verificar si hay al menos dos palabras
    if (palabras.length < 2) {
        // Mostrar un mensaje de error si no hay suficientes palabras
        document.getElementById("p1-output").textContent = "Por favor, ingresa al menos dos palabras separadas por un espacio.";
        return; // Salir de la función sin continuar
    }

    // Invertir el orden de las palabras
    let palabrasInvertidas = palabras.reverse();

    // Unir las palabras invertidas en una cadena nuevamente
    let resultado = palabrasInvertidas.join(' ');

    // Mostrar el resultado
    document.getElementById("p1-output").textContent = resultado;
}

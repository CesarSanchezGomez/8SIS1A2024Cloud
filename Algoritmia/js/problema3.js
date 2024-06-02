function problema3() {
    // Obtener el valor del input y eliminar espacios en blanco al inicio y al final
    let input = document.querySelector('#p3-input').value.trim();

    // Validar el formato usando una expresión regular
    let formatoCorrecto = /^[A-Z]+(?:,[A-Z]+)*$/;

    // Verificar si el input cumple con el formato esperado
    if (!formatoCorrecto.test(input)) {
        // Mostrar un mensaje de error si el formato no es válido
        document.getElementById("p3-output").textContent = "Por favor, ingresa palabras separadas por comas y asegúrate de que solo contengan caracteres del alfabeto A-Z en mayúsculas.";
        return; // Salir de la función sin continuar
    }

    // Separar las palabras por coma
    let palabras = input.split(',');

    // Inicializar variables para la palabra con más caracteres únicos
    let maxUnicos = 0;
    let palabraMaxUnicos = '';

    // Recorrer cada palabra
    palabras.forEach(palabra => {
        // Convertir la palabra a un conjunto de caracteres únicos
        let caracteresUnicos = new Set(palabra);

        // Contar los caracteres únicos
        let numUnicos = caracteresUnicos.size;

        // Actualizar si se encuentra una palabra con más caracteres únicos
        if (numUnicos > maxUnicos) {
            maxUnicos = numUnicos;
            palabraMaxUnicos = palabra;
        }
    });

    // Mostrar el resultado
    document.getElementById("p3-output").textContent = `La palabra con más caracteres únicos es: ${palabraMaxUnicos} (${maxUnicos} caracteres únicos)`;
}

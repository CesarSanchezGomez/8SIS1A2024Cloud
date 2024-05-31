function validarFormulario5() {
    var hombres = document.formulario5.hombres.value;
    var mujeres = document.formulario5.mujeres.value;
    if (hombres.length <= 0 || mujeres.length <= 0) {
        alert("Alguno de los campos se encuentra vacío");
        return false;
    }
    return true
}

function validarChar5(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) {
        return true;
    } // Permitir la tecla de retroceso (backspace)
    var patron = /[0-9]/; // Patrón que solo permite dígitos (0-9)
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function porcentajes5() {
    if (!validarFormulario5()) {
        return;
    }
    var parseHombres = parseInt(document.formulario5.hombres.value);
    var parseMujeres = parseInt(document.formulario5.mujeres.value);
    var sumaHombresMujeres = parseHombres + parseMujeres;
    if (sumaHombresMujeres == 0) {
        alert("La suma de hombres y mujeres no puede ser cero.")
    }
    var porcentajeH = (parseHombres / sumaHombresMujeres) * 100;
    var porcentajeM = (parseMujeres / sumaHombresMujeres) * 100;
    document.formulario5.porcentajeHombres.value = porcentajeH.toFixed(2) + "%";
    document.formulario5.porcentajeMujeres.value = porcentajeM.toFixed(2) + "%";
}

function borrar5() {
    document.formulario5.hombres.value = "";
    document.formulario5.mujeres.value = "";
    document.formulario5.porcentajeHombres.value = "";
    document.formulario5.porcentajeMujeres.value = "";
}
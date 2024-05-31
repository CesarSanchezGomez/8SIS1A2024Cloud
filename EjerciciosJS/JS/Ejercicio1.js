function validarFormulario1() {
    var inversion = document.formulario1.inversion.value;
    if (inversion.length <= 0) {
        alert("El campo esta vacio");
        return false;
    }
    return true
}

function inversiones() {
    if (!validarFormulario1()) {
        return
    }
    var parseInversion = parseInt(document.formulario1.inversion.value);
    if (isNaN(parseInversion) || parseInversion <= 0) {
        alert("La inversión tiene que ser mayor a 0");
    } else {
        var interes = parseInversion * 0.02;
        var capitalTotal = parseInversion + interes;
        document.formulario1.capitalTotal.value = "$" + capitalTotal;
    }
}

function borrar1() {
    document.formulario1.inversion.value = "";
    document.formulario1.capitalTotal.value = "";
}
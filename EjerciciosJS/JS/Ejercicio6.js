function calcularEdad() {
    var fechaNacimiento = new Date(document.formulario6.fechaNacimiento.value);

    if (isNaN(fechaNacimiento)) {
        alert("Fecha de nacimiento no válida");
        return;
    }

    var anoNacimiento = fechaNacimiento.getFullYear();
    var mesNacimiento = fechaNacimiento.getMonth();
    var diaNacimiento = fechaNacimiento.getDate();
 
    var fechaActual = new Date();
    var anoActual = fechaActual.getFullYear();
    var mesActual = fechaActual.getMonth();
    var diaActual = fechaActual.getDate();

    var edad = anoActual - anoNacimiento;

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }

    document.formulario6.edad.value= edad + " años";

}

function borrar6() {
    document.formulario6.fechaNacimiento.value = "";
    document.formulario6.edad.value = "";
}

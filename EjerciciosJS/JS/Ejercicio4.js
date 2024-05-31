function validarFormulario4() {
    var parcial1 = document.formulario4.parcial1.value;
    var parcial2 = document.formulario4.parcial2.value;
    var parcial3 = document.formulario4.parcial3.value;
    var examenFinal = document.formulario4.examenFinal.value;
    var proyectoFinal = document.formulario4.proyectoFinal.value;

    if (parcial1.lenght <= 0 || parcial2.lenght <= 0 || parcial3.lenght <= 0 || examenFinal <= 0 || proyectoFinal <= 0) {
        alert("Alguno de los campos esta vacio");
        return false;
    }
    return true;

}

function validarCalificaciones(input) {
    let value = parseFloat(input.value);
    if (isNaN(value) || value < 0) {
        input.value = 0;
    } else if (value > 10) {
        input.value = 10;
    }
}

function promedio(){
    if (!validarFormulario4()){
        return;
    }
    var parcial1 = parseFloat(document.formulario4.parcial1.value);
    var parcial2 = parseFloat(document.formulario4.parcial2.value);
    var parcial3 = parseFloat(document.formulario4.parcial3.value);
    var promedioParciales = ((parcial1 + parcial2 + parcial3) / 3) * 0.55;

    var examenFinal = parseFloat(document.formulario4.examenFinal.value);
    var promedioExamen = examenFinal * 0.30;

    var proyectoFinal = parseFloat(document.formulario4.proyectoFinal.value);
    var promedioProyecto = proyectoFinal * 0.15;

    var promedioFinal = promedioParciales + promedioExamen + promedioProyecto;
    document.formulario4.promedioFinal.value = promedioFinal.toFixed(2);
}

function borrar4(){
    document.formulario4.parcial1.value="";
    document.formulario4.parcial2.value="";
    document.formulario4.parcial3.value="";
    document.formulario4.examenFinal.value="";
    document.formulario4.proyectoFinal.value="";
    document.formulario4.promedioFinal.value="";
}


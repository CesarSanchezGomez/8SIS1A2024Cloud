function validarFormulario2() {
    var sueldoBase = document.formulario2.sueldoBase.value;
    var venta1 = document.formulario2.venta1.value;
    var venta2 = document.formulario2.venta2.value;
    var venta3 = document.formulario2.venta3.value;
    if (sueldoBase.length <= 0 || venta1.length <= 0 || venta2.length <= 0 || venta3.length <= 0) {
        alert("Alguno de los campos esta vacio");
        return false;
    }
    return true;
}

function comisiones() {
    if (!validarFormulario2()){
        return
    }
    var sueldoBase = parseFloat(document.formulario2.sueldoBase.value);
    var venta1Comision = parseFloat(document.formulario2.venta1.value) * 0.10;
    var venta2Comision = parseFloat(document.formulario2.venta2.value) * 0.10;
    var venta3Comision = parseFloat(document.formulario2.venta3.value) * 0.10;

    if (sueldoBase <= 0 || venta1Comision <= 0 || venta2Comision <= 0 || venta3Comision <= 0){
        alert("El sueldo y las ventas no pueden ser 0 o menores a 0");
    } else {
        var sueldoTotal = (sueldoBase + venta1Comision + venta2Comision + venta3Comision);
        document.formulario2.comision1.value= "$" + venta1Comision.toFixed(2);
        document.formulario2.comision2.value= "$" + venta2Comision.toFixed(2);
        document.formulario2.comision3.value= "$" + venta3Comision.toFixed(2);
        document.formulario2.sueldoTotal.value= "$" + sueldoTotal.toFixed(2);
    }
}

function borrar2() {
    document.formulario2.sueldoBase.value="";
    document.formulario2.venta1.value="";
    document.formulario2.venta2.value="";
    document.formulario2.venta3.value="";
    document.formulario2.comision1.value="";
    document.formulario2.comision2.value="";
    document.formulario2.comision3.value="";
    document.formulario2.sueldoTotal.value="";
}


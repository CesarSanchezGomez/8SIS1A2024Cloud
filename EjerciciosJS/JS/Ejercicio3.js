function validarFormulario3(){
    var compraTotal = document.formulario3.compraTotal.value;
    if (compraTotal.length <= 0) {
        alert("El campo esta vacio");
        return false;
    }
    return true;
}

function descuentos() {
    if (!validarFormulario3()){
        return;
    }
    var parseCompraTotal = parseInt(document.formulario3.compraTotal.value);
    if (isNaN(parseCompraTotal) || parseCompraTotal <= 0){
        alert("El monto no puede ser 0 o menor a 0")
    } else {
    var descuento = parseCompraTotal * 0.15;
    var montoFinal = parseCompraTotal - descuento;
    document.formulario3.descuento.value = "$" + descuento;
    document.formulario3.montoFinal.value = "$" + montoFinal;
    }
}

function borrar3() {
    document.formulario3.compraTotal.value="";
    document.formulario3.descuento.value="";
    document.formulario3.montoFinal.value="";
}
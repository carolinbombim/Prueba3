function validar()
{
    var nombre = document.formulario.nombre.value
    var rut = document.formulario.rut.value
    if (nombre.length<3)
    {
        alert("Nombre debe tener al menos 3 caracteres");
        document.formulario.nombre.focus();
        return false;
    }
    if (parseInt(rut)<9 || parseInt(rut)>10)                
    {
           alert("Ingrese rut correcto");
           document.fomulario.rut.focus();
           return false;
   }
}




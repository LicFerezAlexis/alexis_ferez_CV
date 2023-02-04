//validación de Formulario

function validarFormulario(){
    var nombre, email, mensaje
    nombre= document.getElementById("nombre").value;
    email= document.getElementById("email").value;
    mensaje=document.getElementById("mensaje").value;
    epxRegular=/\w+@\w+\.+[a-z]/ //expresión regular que le da formato al campo email
    
    if (nombre === "" || email ==="" || "" || mensaje === ""){
        alert("Debre rellenar todos los campos del formularios");
        return false; // evita el envío del formulario
    }else if(nombre.length >35 || nombre.length<8){
        alert("el nombre debe contener entre 8 y 35 caracteres");
        return false;
    }
    else if(mensaje.length > 50 || mensaje.length < 20){
        alert("el mensaje debe contener entre 20 y 50 caracteres")
        return false;
    }
    

    if (!epxRegular.test(email)){ // si no se cumple la expresión regular, mostramos un mensaje
        alert("el email es incorrecto")
    }


}


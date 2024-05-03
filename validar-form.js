//validar formularios

function validarFormulario() {
    let usuario = document.getElementById("nombreregistrarse").value;
    let email = document.getElementById("emailregistrarse").value;
    let password = document.getElementById("contraseñaregistrarse").value;

    if (usuario === "" || email === "" || password === "") {
        alert("Por favor completa todos los campos.");
        return false;
    }
    
    window.location.href = "./verificacion_mail.html";

    return false;
}

function validarFormularioLogin() {
    let usuario = document.getElementById("nombreusuario").value;
    let contraseña = document.getElementById("contraseñalogin").value;

    if (usuario === "" || contraseña === "") {
        alert("Por favor completa todos los campos.");
        return false; 
    }

    return true; 
}

function validarFormularioRecuperar() {
    let email = document.getElementById("emailrecuperacion").value;

    if (email === "") {
        alert("Por favor ingresa tu correo electrónico.");
        return false;
    }

    window.location.href = "./verificacion_mail.html";

    return false;
}

function validarFormularioVerificacion() {
    var codigo = document.getElementById("codigoverificacion").value;

    if (codigo === "") {
        alert("Por favor ingresa el código de verificación.");
        return false;
    }

    return true;
}

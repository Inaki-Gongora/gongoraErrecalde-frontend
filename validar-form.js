//validar formularios

function validarFormulario() {
    let usuario = document.getElementById("nombreregistrarse").value;
    let email = document.getElementById("emailregistrarse").value;
    let password = document.getElementById("contraseñaregistrarse").value;

    if (usuario === "" || email === "" || password === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor completa todos los campos.",
          });
        return false;
    }
    
    window.location.href = "./verificacion_mail.html";

    return false;
}

function validarFormularioLogin() {
    let usuario = document.getElementById("nombreusuario").value;
    let contraseña = document.getElementById("contraseñalogin").value;

    if (usuario === "" || contraseña === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor completa todos los campos.",
          });
        return false; 
    }

    return true; 
}

function validarFormularioRecuperar() {
    let email = document.getElementById("emailrecuperacion").value;

    if (email === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor ingresa tu correo electrónico.",
          });
        return false;
    }

    window.location.href = "./verificacion_mail.html";

    return false;
}

function validarFormularioVerificacion() {
    let codigo = document.getElementById("codigoverificacion").value;

    if (codigo === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor ingresa el código de verificación",
          });
        return false;
    }

    return true;
}

// Mostrar/Ocultar contraseña

document.getElementById("showPassword").addEventListener("click", function() {
    let contraseñalogin = document.getElementById("contraseñalogin");
    if (contraseñalogin.getAttribute("type") === "password") {
        contraseñalogin.setAttribute("type", "text");
        document.getElementById("showPassword").src = "multimedia/invisible.png";
    } else {
        contraseñalogin.setAttribute("type", "password");
        document.getElementById("showPassword").src = "multimedia/visible.png";
    }
});

document.getElementById("showPassword").addEventListener("click", function() {
    let contraseñaregistrarse = document.getElementById("contraseñaregistrarse");
    if (contraseñaregistrarse.getAttribute("type") === "password") {
        contraseñaregistrarse.setAttribute("type", "text");
        document.getElementById("showPassword").src = "multimedia/invisible.png";
    } else {
        contraseñaregistrarse.setAttribute("type", "password");
        document.getElementById("showPassword").src = "multimedia/visible.png";
    }
});
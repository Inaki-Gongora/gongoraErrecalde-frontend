//validar formularios

let alertaTimeout;
let alertaDiv;

function mostrarAlerta(mensaje, tipo) {
    if (alertaDiv) {
        alertaDiv.textContent = mensaje;
        alertaDiv.className = `alerta alerta-${tipo}`;
        reiniciarTemporizador();
    } else {
        alertaDiv = document.createElement('div');
        alertaDiv.className = `alerta alerta-${tipo}`;
        alertaDiv.appendChild(document.createTextNode(mensaje));
        const alertContainer = document.querySelector('.alert-container');
        alertContainer.appendChild(alertaDiv);

        setTimeout(() => {
            alertaDiv.classList.add('mostrar');
        }, 10);

        iniciarTemporizador();
    }
}

function iniciarTemporizador() {
    clearTimeout(alertaTimeout);
    alertaTimeout = setTimeout(() => {
        ocultarAlerta();
    }, 3000);
}

function reiniciarTemporizador() {
    clearTimeout(alertaTimeout);
    iniciarTemporizador();
}

function ocultarAlerta() {
    if (alertaDiv) {
        alertaDiv.classList.remove('mostrar');
        setTimeout(() => {
            alertaDiv.remove();
            alertaDiv = null;
        }, 200);
    }
}



function validarFormulario() {
    let usuario = document.getElementById("nombreregistrarse").value;
    let email = document.getElementById("emailregistrarse").value;
    let password = document.getElementById("contraseñaregistrarse").value;

    if (usuario === "" || email === "" || password === "") {
        mostrarAlerta("Por favor completa todos los campos.", "danger");
        return false;
    }
    
    window.location.href = "./verificacion_mail.html";

    return false;
}

function validarFormularioLogin() {
    let usuario = document.getElementById("nombreusuario").value;
    let contraseña = document.getElementById("contraseñalogin").value;

    if (usuario === "" || contraseña === "") {
        mostrarAlerta("Por favor completa todos los campos.", "danger");
        return false; 
    }

    return true; 
}

function validarFormularioRecuperar() {
    let email = document.getElementById("emailrecuperacion").value;

    if (email === "") {
        mostrarAlerta("Por favor ingresa tu correo electrónico.", "danger");
        return false;
    }

    window.location.href = "./verificacion_mail.html";

    return false;
}

function validarFormularioVerificacion() {
    let codigo = document.getElementById("codigoverificacion").value;

    if (codigo === "") {
        mostrarAlerta("Por favor ingresa el código de verificación", "danger");
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
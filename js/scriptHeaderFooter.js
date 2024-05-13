const header = document.getElementById('header');
const botonesHeader = document.getElementById ('botones-header')
const contactoTexto = document.getElementById ('contacto-texto')
const horizontalRule = document.getElementById ('horizontal-rule')
const menuDesplegable = document.getElementById ('menu-desplegable')
const botonMenu = document.getElementById ('icono-menu')
const botonBuscar = document.getElementById ('icono-buscar')
const botonUser = document.getElementById ('icono-usuario')
const botonCerrarMenu = document.getElementById ('boton-cerrar-menu')
const fondoDifuminar = document.getElementById ('fondo-menu')
botonesHeader.style.transition = 'all 0.5s ease';
fondoDifuminar.style.transition = 'backdrop-filter 0.5s ease';
contactoTexto.style.transition = 'all 0.5s ease';
menuDesplegable.style.transition = 'all 0.5s ease';
botonMenu.style.transition = 'all 0.5s ease';
botonBuscar.style.transition = 'all 0.5s ease';
header.style.transition = 'none';
function devolverAnimaciones() {
    header.style.transition = 'all 0.5s ease';
}
setTimeout(devolverAnimaciones, 50);

let botonMenuActivo = false
botonMenu.addEventListener('click', function() {
    botonMenuActivo = !botonMenuActivo;
    if (botonMenuActivo) {
        menuDesplegable.style.right = '0px' 
        botonMenu.style.rotate = '-90deg'
        fondoDifuminar.style.backdropFilter = 'blur(4px)'
        fondoDifuminar.style.zIndex = '6'
        document.body.style.overflow = 'hidden'
    } else {
        fondoDifuminar.style.backdropFilter = ''
        fondoDifuminar.style.zIndex = ''
        document.body.style.overflow = ''
    }
    
} 

)
botonCerrarMenu.addEventListener('click', function(){
    menuDesplegable.style.right = '';
    botonMenu.style.rotate = ''
    botonMenuActivo = false
    fondoDifuminar.style.backdropFilter = ''
    fondoDifuminar.style.zIndex = ''
    document.body.style.overflow = ''
})
window.addEventListener("offline", function(){
    console.log("Se perdió la conección a internet")
})
window.addEventListener("online", function(){
    console.log("Vuelves a estar conectado a internet")
})
botonUser.addEventListener('click', function(){
    window.location.href = '/html/login.html'
})


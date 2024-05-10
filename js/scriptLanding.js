        const header = document.getElementById('header');
        const tituloLandingMain = document.getElementById('titulo-landing-main');
        const botonesHeader = document.getElementById ('botones-header')
        const contactoTexto = document.getElementById ('contacto-texto')
        const horizontalRule = document.getElementById ('horizontal-rule')
        const menuDesplegable = document.getElementById ('menu-desplegable')
        const botonMenu = document.getElementById ('icono-menu')
        const botonBuscar = document.getElementById ('icono-buscar')
        const botonUser = document.getElementById ('icono-usuario')
        const botonCerrarMenu = document.getElementById ('boton-cerrar-menu')
        const fondoDifuminar = document.getElementById ('fondo-menu')
        tituloLandingMain.style.transition = 'all 0.5s ease';
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

        function verificarPosicion() {
            if (window.pageYOffset === 0) {
                tituloLandingMain.classList.remove('logo-marca-landing');
                tituloLandingMain.classList.add('titulo-landing-main');
                header.style.background = 'none';
                botonesHeader.style.justifyContent = 'center';
                botonesHeader.style.float = 'right'              
                botonesHeader.style.transform = ""
                horizontalRule.style.opacity = '0'
                header.style.borderBottom = 'none'
                contactoTexto.style.opacity = '0'
                contactoTexto.style.fontSize = '30px'
                contactoTexto.style.cursor = 'default'
                menuDesplegable.style.right = ''
                botonMenu.style.rotate = '' 
                fondoDifuminar.style.backdropFilter = ''
                fondoDifuminar.style.zIndex = ''
                document.body.style.overflow = ''
                botonMenuActivo = false     
            } else {                
                tituloLandingMain.classList.remove('titulo-landing-main');
                tituloLandingMain.classList.add('logo-marca-landing');
                botonesHeader.style.justifyContent = '';
                header.style.background = 'center';
                botonesHeader.style.float = 'right';
                header.style.backgroundColor = '#F9F9F9'
                header.style.opacity = '0.85'  
                horizontalRule.style.position = 'fixed'   
                horizontalRule.style.top = '100px'                     
                horizontalRule.style.opacity = ''
                header.style.borderBottom = ''
                botonesHeader.style.transform = "scale(0.65,0.65)"
                contactoTexto.style.opacity = ''; 
                contactoTexto.style.fontSize = ''
                contactoTexto.style.cursor = ''
                     
            }
        }
        
        let botonMenuActivo = false
        // Captura 1
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
        // Captura 1.5
        botonCerrarMenu.addEventListener('click', function(){
            menuDesplegable.style.right = '';
            botonMenu.style.rotate = ''
            botonMenuActivo = false
            fondoDifuminar.style.backdropFilter = ''
            fondoDifuminar.style.zIndex = ''
            document.body.style.overflow = ''
        })
        // Captura 2
        window.addEventListener('scroll', verificarPosicion);
        // Captura 3
        window.addEventListener('load', verificarPosicion);
        // Captura 4
        window.addEventListener("offline", function(){
            console.log("Se perdió la conección a internet")
        })
        // Captura 5
        window.addEventListener("online", function(){
            console.log("Vuelves a estar conectado a internet")
        })
        // Captura 6
        botonUser.addEventListener('click', function(){
            window.location.href = '/html/login.html'
        })
  
        
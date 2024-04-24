const header = document.getElementById('header');
        const tituloLandingMain = document.getElementById('titulo-landing-main');
        const botonesHeader = document.getElementById ('botones-header')
        const contactoTexto = document.getElementById ('contacto-texto')
        const horizontalRule = document.getElementById ('horizontal-rule')
        tituloLandingMain.style.transition = 'all 0.5s ease';
        botonesHeader.style.transition = 'all 0.5s ease';
        contactoTexto.style.transition = 'all 0.5s ease';
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
            }
        }
        window.addEventListener('scroll', verificarPosicion);
        window.addEventListener('load', verificarPosicion);
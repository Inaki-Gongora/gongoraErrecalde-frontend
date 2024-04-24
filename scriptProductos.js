  document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('header');
  const tituloProducto = document.querySelector('.titulo-producto');
  const zephyrGrande = document.getElementById('zephyr-grande');
  const logoMarca = document.getElementById('logo-marca');
  header.style.transition = 'none';
  tituloProducto.style.transition = 'none';
  zephyrGrande.style.transition = 'none';
  function devolverAnimaciones() {
    header.style.transition = 'all 0.5s ease'
    tituloProducto.style.transition = 'all 0.5s ease'
    zephyrGrande.style.transition = 'all 0.5s ease';
  }

  setTimeout(devolverAnimaciones, 5)
  function verificarPosicion() {
    if (window.pageYOffset === 0) {
      header.style.top = "-100px";
      tituloProducto.classList.add('titulo-producto-full');
      zephyrGrande.style.top = '-100px'
    }
    else {
      header.style.top = "0";
      tituloProducto.classList.remove('titulo-producto-full');
      zephyrGrande.style.top = '4.5%'
    }
  }
      window.addEventListener('scroll', verificarPosicion);
      window.addEventListener('load', verificarPosicion);
  });
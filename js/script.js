window.addEventListener('load',function(e){

  const boton = document.getElementById('formulario');

  boton.addEventListener('submit', function(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;

    if(nombre === '' || apellido ==='' || edad === '' ){
      Swal.fire({
        position: 'center',
        icon: 'error',
        width:'300px',
        heightAuto:false,
        title: 'Faltan datos',
        showConfirmButton: false,
        timer: 2000
      })
    }else{
      Swal.fire({
        position: 'center',
        icon: 'success',
        width:'300px',
        heightAuto:false,
        title: `${nombre} ${apellido}`,
        text:`Tienes ${edad} Años de Edad`,
        showConfirmButton: false,
        timer: 3000
      })
      formulario.reset();
    }
  });
})
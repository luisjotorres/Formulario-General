  // Configuracion de los Mensajes SweetAlert
  function mensajeSweetAlert(icon, title, text, timer){
    Swal.fire({
      position: "center",
      icon: icon,
      width: "300px",
      heightAuto: false,
      title: title,
      text: text,
      showConfirmButton: false,
      timer: timer,
    });
  }

  // capturo el formulario
  const boton = document.getElementById('formulario');

  // Determino acciones al enviar datos
  boton.addEventListener('submit', function(e){
    // Evito el envio instantaneo y que no se muestre el mensaje
    e.preventDefault(); 

    // Capturo los valores Ingresados al Formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;

    // Valido que no hayan campos vacios
    if(nombre === '' || apellido ==='' || edad === '' ){
      mensajeSweetAlert('error', 'Faltan Datos!', 'Llena Todos Los Campos!' , 2000);
    }else{ //si no hay campos vacios, realiza el envio
      mensajeSweetAlert('success', `${nombre} ${apellido}`, `Tienes ${edad} Años de Edad` , 2000);
      formulario.reset();
    }
  });
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
    }
  });
})










// window.addEventListener("load", () => {

//   const btnEnviar = document.getElementById("formulario");
//   const txtNombre = document.getElementById("nombre");
//   const txtApellido = document.getElementById("apellido");
//   const txtEdad = document.getElementById("edad");

//   // Funcion Para Generar Mensajes SweetAlert;
//   const mostrarSweetAlert = (icon, title, footer, time) => {
//     Swal.fire({
//       position: "center",
//       icon: icon,
//       title: title,
//       showConfirmButton: false,
//       text: footer,
//       timer: time,
//       width:300,
//       heightAuto:false,
//       background:'#B1C9F6'
//     });
//   }


  

//   btnEnviar.addEventListener('submit',()=>{
//     // mostrarSweetAlert("success", "Felicidades", "Datos Enviados Correctamente!", 12000);
//     Swal.fire('Any fool can use a computer')


//   })

//   // document.getElementById("btnEnviar").addEventListener("click", function(){
//   //   swal("Mensaje de alerta", {
//   //     buttons: false,
//   //     timer: 2000,
//   //   });
//   // });


// });
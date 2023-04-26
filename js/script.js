// *******************************************************************************
// FUNCIONES
// *******************************************************************************
// Funcion que Genera el Sweet Alert
function mensajeSweetAlert(icon, title, text, timer) {
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

// Funcion que asigna el foco al primer campo a llenar
function foco(campoCont){
  document.addEventListener("DOMContentLoaded", function() {
    const primerCampo = document.getElementById("nombre");
    const segundoCampo = document.getElementById("apellido");
    const tercerCampo = document.getElementById("edad");
    if(campoCont===1)primerCampo.focus();
    if(campoCont===2)segundoCampo.focus();
    if(campoCont===3)tercerCampo.focus();
  });
}

// Funcion para recolectar  los datos del formulario
function recolectarDatos() {
  // Capturo los Datos del formulario
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;
  return { nombre, apellido, edad };
}

// Función para validar el formulario
function validarFormulario(nombre, apellido, edad) {
  // valido los datos del formulario
  let estado = nombre == "" || apellido == "" || edad == "" ? true : false;
  return estado;
}

// *******************************************************************************
// PROGRAMA PRINCIPAL
// *******************************************************************************
// Instancio el formulario
const formulario = document.getElementById("formulario");
foco(1);
// Detecto si se ha presionado el boton enviar del formulario
formulario.addEventListener("submit", function (e) {
  // Evito el envio instantaneo por error
  e.preventDefault();
  // desestructuro y guardo datos en varables independientes
  const { nombre, apellido, edad } = recolectarDatos();
  // Llamo a la función para validar el formulario
  const estado = validarFormulario(nombre, apellido, edad);

  if(estado){
    formulario.classList.remove("shake") // remuevo la clase "shake" para que el efecto se pueda repetir
    void formulario.offsetWidth; // forzo la reflow para reiniciar la animación
    formulario.classList.add("shake");
    if(nombre==='' || nombre=== null)foco(1);
  }else{
    mensajeSweetAlert("success","Felicidades!","Datos enviados correctamente!", 3000);
    formulario.reset();
  }
});



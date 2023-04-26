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

// Funcion que mueve el focoal primer campo vacio que encuentra
function moverFocoAlCampoVacio() {
  const camposRequeridos = formulario.querySelectorAll("[required]");
  for (let i = 0; i < camposRequeridos.length; i++) {
    const campo = camposRequeridos[i];
    if (campo.value === "") {
      campo.focus();
      break;
    }
  }
}



// Programa Principal
// Instancio el formulario
const formulario = document.getElementById("formulario");
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
    moverFocoAlCampoVacio();
  }else{
    mensajeSweetAlert("success","Felicidades!","Datos enviados correctamente!", 3000);
    formulario.reset()
  }
});



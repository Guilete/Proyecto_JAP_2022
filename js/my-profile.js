
(function () {
    'use strict'
  

    var forms = document.querySelectorAll('.needs-validation')
  

    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
    })
})()
//-----------necesario para que funquen las validaciones------//


//---------------Botón "Guardar Cambios"---------------//

function validarTodo(){
    let primer_nombre = document.getElementById("Primer_nombre").value;
    console.log(primer_nombre);
    let primer_apellido = document.getElementById("Primer_apellido").value;
    let telefono = document.getElementById("Telefono").value;
    console.log(telefono);

    let segundo_nombre = document.getElementById("Segundo_nombre").value;
    let segundo_apellido = document.getElementById("Segundo_apellido").value;
    
    if ((primer_nombre != "") && (primer_apellido != "") && (telefono != "")){
        
        localStorage.setItem("primer_nombre", primer_nombre);
        localStorage.setItem("primer_apellido", primer_apellido);
        localStorage.setItem("segundo_nombre", segundo_nombre);
        localStorage.setItem("segundo_apellido", segundo_apellido);
        localStorage.setItem("telefono", telefono);

    }
}

//---------------Botón "Guardar Cambios"---------------//

//---------------Agregar info en campos--------------//
function mostrarInfo(){
    primer_nombre1 = localStorage.getItem("primer_nombre");
    primer_apellido1 = localStorage.getItem("primer_apellido");
    segundo_nombre1 = localStorage.getItem("segundo_nombre");
    segundo_apellido1 = localStorage.getItem("segundo_apellido");
    telefono1 = localStorage.getItem("telefono");

    document.getElementById("Primer_nombre").value += primer_nombre1;
    document.getElementById("Segundo_nombre").value += segundo_nombre1;
    document.getElementById("Primer_apellido").value += primer_apellido1;
    document.getElementById("Segundo_apellido").value += segundo_apellido1;
    document.getElementById("Telefono").value += telefono1;
    
    if (primer_nombre1 == null || primer_apellido1 == null || segundo_nombre1 == null || segundo_apellido1 == null || telefono1 == null){
        
        document.getElementById("Primer_nombre").value = "";
        document.getElementById("Segundo_nombre").value = "";
        document.getElementById("Primer_apellido").value = "";
        document.getElementById("Segundo_apellido").value = "";
        document.getElementById("Telefono").value = "";
    }
}
//---------------Agregar info en campos--------------//





//----------------Coloca e-mail en campo-------------//
document.addEventListener("DOMContentLoaded", ()=> {
    mostrarInfo()

    let email = localStorage.getItem("email");
    let Email = document.getElementById("E-mail").value;
    
    if (Email == ""){
        document.getElementById("E-mail").value += email;
    }

    document.getElementById("boton_guardar_info").addEventListener("click", ()=> {
        validarTodo();
      })

    
})
//----------------Coloca e-mail en campo-------------//
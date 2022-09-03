function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let nombre = document.getElementById("nombre").value;
    
    if(email===""||pass===""||nombre===""){
        alert ("Asegúrese de haber llenado los campos requeridos");
    }else{
        localStorage.setItem("email",email);
        location.href="index.html";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ingreso").addEventListener("click", () => {
        login();
    })
})
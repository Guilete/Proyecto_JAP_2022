function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;


    if(email===""||pass===""){
        alert ("Asegúrese de haber llenado los campos requeridos");
    }else{
        location.href="index.html";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ingreso").addEventListener("click", () => {
        login();
    })
})
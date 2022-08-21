document.addEventListener("DOMContentLoaded", ()=> {
    let usuario =localStorage.getItem("email");
    if (usuario == null) {
        alert("Ingresá tus datos pillín");
        location.href = "login.html";
    } else {
        document.getElementById("email").innerHTML = usuario;
    }

})

document.getElementById("cerrar").addEventListener("click", () => {
    alert("Cerrando...");
    localStorage.clear();
    location.href = "login.html";
})

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});
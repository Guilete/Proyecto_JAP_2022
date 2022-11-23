const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const AUTOS_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";
const EXT_TYPE = ".json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}










function login() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let nombre = document.getElementById("nombre").value;
  
  if(email===""||pass===""||nombre===""){
      alert ("Asegúrese de haber llenado los campos requeridos");
  }else{
      localStorage.setItem("email",email);
      localStorage.setItem("nombre",nombre);
      location.href="index.html";
  }
}

document.addEventListener("DOMContentLoaded", ()=> {
  let usuario = localStorage.getItem("email");
  let nombre = localStorage.getItem("nombre");
  if (usuario == undefined || nombre == undefined) {
      alert("Ingresá tus datos pillín");
      location.href = "login.html";
  } else {
      document.getElementById("nombre").innerHTML=nombre;
  }

  document.getElementById("cerrar").addEventListener("click", () => {
    alert("Cerrando...");
    localStorage.clear();
    location.href = "login.html";
  })

  document.getElementById("mi_carrito").addEventListener("click", () => {
    location.href = "cart.html";
  })

  document.getElementById("mi_perfil").addEventListener("click", () => {
    location.href = "my-profile.html";
  })

})


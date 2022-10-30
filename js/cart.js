let cart_array = [];


(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
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


function mostrar_Productos_Carrito(array) {
    let htmlContentToAppend ="";

    
        let carrito = array[0];
        htmlContentToAppend +=`
        <form class="row mt-3 g-3 needs-validation" novalidate>
            <table>
            <th style="padding-left: 100px;">
                <img src="`+ carrito.image +`" class="cursor-active" height=80px; width=120px>
            </th>
            <th style="padding-left: 20px;">
                <p>`+ carrito.name +`</p>
            </th>
            <th style="padding-left: 70px;">
                <p id="moneda" style="float: left;">`+ carrito.currency +`</p>
                <p id="precio_unidad" style="float: right;">`+ carrito.unitCost +`</p>
            </th>
            <th style="padding-left: 70px;">
            <input id="cantidad" type="number" style="width: 60px" min="1" max="100" required>
            <div class="invalid-feedback">
                Seleccione cantidad.
            </div>
            </th>
            <th style="padding-left: 130px;">
            <p id="subtotal_final"></p>
            </th>
            </table>
        </form>
    <hr style="width: 800px; border-top: 2px solid black; margin-left: 100px;">
    `

    document.getElementById("productos_carrito").innerHTML = htmlContentToAppend;
    
};


function subtotal_Cart(){
    precio = parseInt(document.getElementById("precio_unidad").innerHTML);
    moneda = document.getElementById("moneda").innerHTML;
    cantidad = parseInt(document.getElementById("cantidad").value);
    subtotal = moneda + " " + (precio * cantidad);
    document.getElementById("subtotal_final").innerHTML = subtotal;
}




//------------Envios-----------//

function envio_premium(){
    
    precio = parseInt(document.getElementById("precio_unidad").innerHTML);
    cantidad = document.getElementById("cantidad").value;
    subtotal = (precio * cantidad);
    env_pre = 0.15;
    costo_envios = (subtotal * env_pre);
    moneda = document.getElementById("moneda").innerHTML;
    total_pre = moneda + " " + (subtotal + costo_envios);
    document.getElementById("subtotal_cont").innerHTML = moneda + " " + subtotal;
    document.getElementById("envio_cont").innerHTML = moneda + " " + costo_envios;
    document.getElementById("total_cont").innerHTML = total_pre;
    
}

function envio_express(){
    precio = parseInt(document.getElementById("precio_unidad").innerHTML);
    cantidad = document.getElementById("cantidad").value;
    subtotal = (precio * cantidad);
    env_ex = 0.07;
    costo_envios = (subtotal * env_ex);
    moneda = document.getElementById("moneda").innerHTML;
    total_ex = moneda + " " + (subtotal + costo_envios);
    document.getElementById("subtotal_cont").innerHTML = moneda + " " + subtotal;
    document.getElementById("envio_cont").innerHTML = moneda + " " + costo_envios;
    document.getElementById("total_cont").innerHTML = total_ex;
}

function envio_standard(){
    precio = parseInt(document.getElementById("precio_unidad").innerHTML);
    cantidad = document.getElementById("cantidad").value;
    subtotal = (precio * cantidad);
    env_st = 0.05;
    costo_envios = (subtotal * env_st);
    moneda = document.getElementById("moneda").innerHTML;
    total_st = moneda + " " + (subtotal + costo_envios);
    document.getElementById("subtotal_cont").innerHTML = moneda + " " + subtotal;
    document.getElementById("envio_cont").innerHTML = moneda + " " + costo_envios;
    document.getElementById("total_cont").innerHTML = total_st;
}
//--------------Envios--------------//


//-------------Forma de pago--------------//

//-----------Validación de botón "Selección"---------//
function validacionTerminos(){
    let tarjeta_credito = document.getElementById("credito");
    let cuenta_bancaria = document.getElementById("transf_banco");
    let validity = true;
    
    if (tarjeta_credito.checked || cuenta_bancaria.checked){
        validity = true;
        document.getElementById("bad_feedback_boton_pago").style.display = "none";
        document.getElementById("boton_seleccion_pago").classList.add("ok-color");
        document.getElementById("good_feedback_boton_pago").style.display = "inline";
        
    }else{
        validity = false;
        document.getElementById("boton_seleccion_pago").classList.add("error-color");
        document.getElementById("bad_feedback_boton_pago").style.display = "inline";
    }
    return validity;
}
//-----------Validación de botón "Selección"---------//



//-----Anulación de inputs en modal de pago-----//
function anularPago(){
    let credito = document.getElementById("credito");
    let banco = document.getElementById("transf_banco");
    let tarjeta = document.getElementById("num_tarjeta");
    let codigo = document.getElementById("cod_seguridad");
    let vencimiento = document.getElementById("venc_tarjeta");
    let cuenta = document.getElementById("nro_cuenta");

    if (credito.checked){
        cuenta.disabled = true;
        tarjeta.disabled = false;
        codigo.disabled = false;
        vencimiento.disabled = false;
    }else if(banco.checked){
        tarjeta.disabled = true;
        codigo.disabled = true;
        vencimiento.disabled = true;
        cuenta.disabled = false;
    }
}
//-----Anulación de inputs en modal de pago-----//



//----------OnClick de botón de modal--------//
function botonModal(){
    let credito = document.getElementById("credito");
    let banco = document.getElementById("transf_banco");
    let tarjeta = document.getElementById("num_tarjeta");
    let codigo = document.getElementById("cod_seguridad");
    let vencimiento = document.getElementById("venc_tarjeta");
    let cuenta = document.getElementById("nro_cuenta");

    if (credito.checked && tarjeta.checkValidity() && codigo.checkValidity() && vencimiento.checkValidity()){
        document.getElementById("resultado_modal").innerHTML = credito.value;

    
    }
    if (banco.checked && cuenta.checkValidity()){
        document.getElementById("resultado_modal").innerHTML = banco.value;


    }

}
//----------OnClick de botón de modal--------//

//-------------Forma de Pago--------------//


//----------Alert Final------------//

function alertaFinal() {
    let credito = document.getElementById("credito");
    let banco = document.getElementById("transf_banco");
    let calle = document.getElementById("calle");
    let numero = document.getElementById("numero");
    let esquina = document.getElementById("esquina");
    let env_pr = document.getElementById("env_premium");
    let env_exp = document.getElementById("env_express");
    let env_sta = document.getElementById("env_standard");
    let cantidad = document.getElementById("cantidad");

    if ((credito.checked || banco.checked) && (calle.checkValidity() && numero.checkValidity() && esquina.checkValidity()) && (env_pr.checked || env_exp.checked || env_sta.checked) && (cantidad.checkValidity())){

        alert("¡Has realizado la compra con éxito!");
    }else{
        alert("Falta completar los datos requeridos.")
        return false
    }

}


//----------Alert Final------------//



document.addEventListener("DOMContentLoaded", function(){
    let carrito_usuario = "25801";
    getJSONData(CART_INFO_URL + carrito_usuario + EXT_TYPE).then(function(resultObj){
        if (resultObj.status === "ok") {
            cart_array = resultObj.data.articles;
            mostrar_Productos_Carrito(cart_array);
            
            document.getElementById("cantidad").addEventListener("change", function(){
                
                subtotal_Cart();
            })
           
            
        } 
        
        
    })
    
    
    
    
})


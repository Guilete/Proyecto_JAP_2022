const Orden_Ascendente = "Asc";
const Orden_Descendente = "Desc";
const Orden_Asc_Por_Ventas = "SoldAsc";
const Orden_Desc_Por_Ventas = "SoldDesc";
let array_De_Productos_Actual = [];
let criterio_De_Orden_Actual = undefined;


function OrdenarProductos(criteria, elarray){
    let result = [];
    if (criteria === Orden_Ascendente)
    {
        result = elarray.sort(function(a, b) {
            let PriceA = parseInt(a.cost);
            let PriceB = parseInt(b.cost);
            if ( PriceA < PriceB ){ return -1; }
            if ( PriceA > PriceB ){ return 1; }
            return 0;
        });
    }else if (criteria === Orden_Descendente){
        result = elarray.sort(function(a, b) {
            let PriceA = parseInt(a.cost);
            let PriceB = parseInt(b.cost);
            if ( PriceA > PriceB ){ return -1; }
            if ( PriceA < PriceB ){ return 1; }
            return 0;
        });
    }else if (criteria === Orden_Asc_Por_Ventas){
        result = elarray.sort(function(a, b) {
            let SoldA = parseInt(a.soldCount);
            let SoldB = parseInt(b.soldCount);

            if ( SoldA > SoldB ){ return -1; }
            if ( SoldA < SoldB ){ return 1; }
            return 0;
        });
    }else if (criteria === Orden_Desc_Por_Ventas){
        result = elarray.sort(function(a, b) {
            let SoldA = parseInt(a.soldCount);
            let SoldB = parseInt(b.soldCount);

            if ( SoldA < SoldB ){ return -1; }
            if ( SoldA > SoldB ){ return 1; }
            return 0;
        });
    }

    return result;
}
function filtrar(array){
    let menor_precio = parseInt(document.getElementById("minimo").value);
    let mayor_precio = parseInt(document.getElementById("maximo").value);

    let filtrado = array.filter(product=> product.cost >= menor_precio && product.cost <= mayor_precio);

    Mostrar_Lista_De_Productos(filtrado)
}
let codigo = localStorage.getItem("prodID");
function setProdID(id) {
    localStorage.setItem("prodID", id);
    window.location = "product-info.html"
}

let productsArray = []

function Mostrar_Lista_De_Productos(array){
    let htmlContentToAppend = "";
   
    for(let i = 0; i < array.length; i++){ 
        let product = array[i];
        htmlContentToAppend += `
            <div onclick="setProdID(${product.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="` + product.image + `" alt="product image" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <div class="mb-1">
                            <h4>`+ product.name + " " + "-" + " " + product.currency + " " + product.cost +`</h4> 
                            <p> `+ product.description +`</p> 
                            </div>
                            <small class="text-muted">` + product.soldCount + ` artículos</small> 
                        </div>
                    </div>
                </div>
            </div>
            `
        

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    
    }
         
}


function Ordenar_Y_Mostrar_Productos(criterio_De_Orden, productsArray){
    criterio_De_Orden_Actual = criterio_De_Orden;

    if(productsArray != undefined){
        array_De_Productos_Actual = productsArray;
    }

    array_De_Productos_Actual = OrdenarProductos(criterio_De_Orden_Actual, array_De_Productos_Actual);

    Mostrar_Lista_De_Productos(array_De_Productos_Actual);
}


document.addEventListener("DOMContentLoaded", function(e){
    let seccion = localStorage.getItem("catID");
    getJSONData(PRODUCTS_URL + seccion + EXT_TYPE).then(function(resultObj){
        if (resultObj.status === "ok") {
            productsArray = resultObj.data.products;
            Mostrar_Lista_De_Productos(productsArray);
        }
        
    }); 
    document.getElementById("Asc").addEventListener("click", ()=>{
        Ordenar_Y_Mostrar_Productos(Orden_Ascendente,productsArray);
    });
    document.getElementById("Desc").addEventListener("click", ()=>{
        Ordenar_Y_Mostrar_Productos(Orden_Descendente,productsArray);
    });
    document.getElementById("SoldAsc").addEventListener("click", ()=>{
        Ordenar_Y_Mostrar_Productos(Orden_Asc_Por_Ventas,productsArray);
    });
    document.getElementById("SoldDesc").addEventListener("click", ()=>{
        Ordenar_Y_Mostrar_Productos(Orden_Desc_Por_Ventas,productsArray);
    });
    document.getElementById("filtrar").addEventListener("click", ()=>{
        filtrar(productsArray);
    });
    document.getElementById("limpiar").addEventListener("click", ()=>{
        document.getElementById("minimo").value = "";
        document.getElementById("maximo").value = "";
    
        Mostrar_Lista_De_Productos(productsArray);
        
    });
    
});
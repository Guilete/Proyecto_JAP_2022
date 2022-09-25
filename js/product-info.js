
let products_info_Array = [];

let comentario_Array = [];



function Mostrar_Info_De_Productos(array){
    let nombre = array.name;
    let precio = array.currency + array.cost;
    let descripcion = array.description;
    let categoria = array.category;
    let cantidad_vendida = array.soldCount;
    document.getElementById("nombre").innerHTML = nombre;
    document.getElementById("precio").innerHTML = precio;
    document.getElementById("descripcion").innerHTML = descripcion;
    document.getElementById("categoria").innerHTML = categoria;
    document.getElementById("vendidos").innerHTML = cantidad_vendida;
    let imagen1 = array.images[0];
    let imagen2 = array.images[1];
    let imagen3 = array.images[2];
    let imagen4 = array.images[3];
    document.getElementById("img1").src = imagen1;
    document.getElementById("img2").src = imagen2;
    document.getElementById("img3").src = imagen3;
    document.getElementById("img4").src = imagen4;
}


function puntaje(comentarios){
    let puntos = "";
    for(let i = 1; i <= 5; i++){
        if (i<=comentarios.score){
            puntos += '<i class="fas fa-star" style="color: orange;"></i>'
        }else{
            puntos += '<i class="far fa-star" style="color: orange;"></i>'
        }
    }
    return puntos
}



function Mostrar_Comentario(array){
    let htmlContentToAppend = "";
   
    for(let i = 0; i < array.length; i++){ 
        let comentario = array[i];
        htmlContentToAppend += 
        `<table style="border: 1px solid grey; width: 1200px; background-color: lightcyan;"><tr><td><strong><p style="font-size: 1.1rem">`+ comentario.user +`</strong>`+" "+ puntaje(comentario) +`<br>"`+ comentario.description +`"</p>
        <p style="color: grey">`+ comentario.dateTime +`</p></td></tr><table>`;
    }
    document.getElementById("comentarios").innerHTML = htmlContentToAppend;
}





document.addEventListener("DOMContentLoaded", function(){
    let codigo = localStorage.getItem("prodID");
    getJSONData(PRODUCT_INFO_URL + codigo + EXT_TYPE).then(function(resultObj){
        if (resultObj.status === "ok") {
            products_info_Array = resultObj.data;
            Mostrar_Info_De_Productos(products_info_Array);
        }
        
    })

    getJSONData(PRODUCT_INFO_COMMENTS_URL + codigo + EXT_TYPE).then(function(resultObj){
        if (resultObj.status === "ok") {
            comentario_Array = resultObj.data;
            console.log(comentario_Array)
            Mostrar_Comentario(comentario_Array)
        }
    
    });

});

let imagenes = [];

function Mostrar_Imagenes(array){

    let htmlContentToAppend ="";

    for (let i = 0; i < array.length; i++){
        
        let imagenes = array[i];
        htmlContentToAppend += `
        <div class="row">
        <div style="width:20%; height:20%"><img src="` + imagenes.images[0] + `" alt="product image" class="img-thumbnail"></div>
        </div>
        `
        document.getElementById("img").innerHTML = htmlContentToAppend;
    }
}


function comentar(array){
    let usuario = array[i];
    usuario.nombre = document.getElementById('nombre').value;
    usuario.comentario = document.getElementById('comentario').value;
    localStorage.setItem("Comentario", id);
    Mostrar_Comentario(comentarios);
}





    <img style="height: 20%; width: 20%;" id="img1" [src]="">
      <img style="height: 20%; width: 20%;" id="img2" [src]="">
      <img style="height: 20%; width: 20%;" id="img3" [src]="">
      <img style="height: 20%; width: 20%;" id="img4" [src]="">





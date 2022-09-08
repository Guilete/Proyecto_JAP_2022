const ORDER_ASC_BY_PRICE = "AZ";
const ORDER_DESC_BY_PRICE = "ZA";
const ORDER_BY_PROD_SOLD = "Cant.";
let currentProductsArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_PRICE)
    {
        result = array.sort(function(a, b) {
            let PriceA = parseInt(a.cost);
            let PriceB = parseInt(b.cost);
            if ( PriceA < PriceB ){ return -1; }
            if ( PriceA > PriceB ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_PRICE){
        result = array.sort(function(a, b) {
            let PriceA = parseInt(a.cost);
            let PriceB = parseInt(b.cost);
            if ( PriceA > PriceB ){ return -1; }
            if ( PriceA < PriceB ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_SOLD){
        result = array.sort(function(a, b) {
            let SoldA = parseInt(a.soldCount);
            let SoldB = parseInt(b.soldCount);

            if ( SoldA > SoldB ){ return -1; }
            if ( SoldA < SoldB ){ return 1; }
            return 0;
        });
    }

    return result;
}


let productsArray = []

function showProductList(array){
    let htmlContentToAppend = "";
   
    for(let i = 0; i < array.length; i++){ 
        let product = array[i];

        
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
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


function sortAndShowProducts(sortCriteria, productsArray){
    currentSortCriteria = sortCriteria;

    if(productsArray != undefined){
        currentProductsArray = productsArray;
    }

    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);

    showProductList(currentProductsArray);
}


document.addEventListener("DOMContentLoaded", function(e){
    let seccion = localStorage.getItem("catID");
    getJSONData(PRODUCTS_URL + seccion + EXT_TYPE).then(function(resultObj){
        if (resultObj.status === "ok") {
            productsArray = resultObj.data.products;
            showProductList(productsArray);
        }
        
    }); 
    
    document.getElementById("Asc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_PRICE,productsArray);
    });
    
    document.getElementById("Desc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_PRICE);
    });
    
    document.getElementById("Sold").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_PROD_SOLD);
    });
    
    document.getElementById("limpiar").addEventListener("click", function(){
        document.getElementById("minimo").value = "";
        document.getElementById("maximo").value = "";
    
        minCount = undefined;
        maxCount = undefined;
    
        showProductList(currentProductsArray);
    });

    document.getElementById("filtrar").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("minimo").value;
        maxCount = document.getElementById("maximo").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showCategoriesList();
    });
});




let basket = [];

const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");
const priceInput = document.getElementById("priceInput");


function addToBasket(){

    let product = productInput.value
    let price = Number(priceInput.value)
    let exist = false;

    const newProduct ={
        product : product,
        price: price,
        quantity: 1
    }
    for (item of basket){
        if (item.product === product){
            exist = true;
            item.quantity ++;
        }
    }    

    if (!exist)
        basket.push(newProduct);

    productInput.value = "";
    priceInput.value = "";
}


function renderBasket(){
    cartList.innerText = "";
    for(item of basket){
        let listItem = document.createElement("li");
        listItem.textContent = item.product + ` - ${item.price}kr ` + `(x${item.quantity})`;
        cartList.appendChild(listItem)            
    }
}


addButton.addEventListener("click", ()=>{
    addToBasket();
    console.log(basket)
    renderBasket();
})

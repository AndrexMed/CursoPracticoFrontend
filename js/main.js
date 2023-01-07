const menuEmail = document.querySelector(".navbar-email");
const menuBurger = document.querySelector(".menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const  shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener("click", toggleCarrito);
productDetailCloseIcon.addEventListener("click", closeDetailProduct);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
}
function toggleCarrito() {
    shoppingCartContainer.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
}

function openDetailProduct(){
    productDetailContainer.classList.remove("inactive");
    desktopMenu.classList.add("inactive");
    shoppingCartContainer.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}

function closeDetailProduct(){
    productDetailContainer.classList.add("inactive");
}

const productArray = [];

productArray.push({
    name: "Suculenta 1",
    price: "$50.000",
    image: "imgs/suculentas/Aurora1.jpg"
});

productArray.push({
    name: "Suculenta 2",
    price: "$100.000",
    image: "imgs/suculentas/Aurora2.jpg"
});

productArray.push({
    name: "Suculenta 3",
    price: "$220.000",
    image: "imgs/suculentas/Burrito1.jpg"
});

productArray.push({
    name: "Suculenta 4",
    price: "$320.000",
    image: "imgs/suculentas/Burrito2.jpg"
});

productArray.push({
    name: "Suculenta 5",
    price: "$20.000",
    image: "imgs/suculentas/Corpuscularia1.jpg"
});

productArray.push({
    name: "Suculenta 6",
    price: "$1000",
    image: "imgs/suculentas/Corpuscularia2.jpg"
});

productArray.push({
    name: "Suculenta 7",
    price: "$243.000",
    image: "imgs/suculentas/Crassula_Muscosa1.jpg"
});

productArray.push({
    name: "Suculenta 8",
    price: "$10.000",
    image: "imgs/suculentas/Crassula_Muscosa2.jpg"
});

productArray.push({
    name: "Suculenta 9",
    price: "$60.000",
    image: "imgs/suculentas/Portulacaria1.jpg"
});

productArray.push({
    name: "Suculenta 10",
    price: "$7.000",
    image: "imgs/suculentas/Portulacaria2.jpg"
});

function mostrarProductos(Arreglo){
    for (product of Arreglo) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        // product = {name,price,image} -> product.image
        const ProductImg = document.createElement("img");
        ProductImg.setAttribute("src", product.image);
        ProductImg.addEventListener("click", openDetailProduct);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice,productName); //Abreviacion de las siguientes dos lineas.
        // productInfoDiv.appendChild(productPrice);
        // productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "imgs/icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure); //Abreviacion sgtes dos lineas
        // productInfo.appendChild(productInfoDiv);
        // productInfo.appendChild(productInfoFigure);
    
        productCard.append(ProductImg,productInfo);
        // productCard.appendChild(ProductImg);
        // productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
mostrarProductos(productArray);

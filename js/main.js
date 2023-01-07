const menuEmail = document.querySelector(".navbar-email");
const menuBurger = document.querySelector(".menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
}
function toggleCarritoAside() {
    aside.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
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

function mostrarProductos(Arreglo){
    for (product of Arreglo) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        // product = {name,price,image} -> product.image
        const ProductImg = document.createElement("img");
        ProductImg.setAttribute("src", product.image);
    
    
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

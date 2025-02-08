const shoppingCart = document.querySelector(".shoppingCart");
const productContainer = document.querySelector(".products");
const shoppingCartSection = document.querySelector(".shoppingCartSection");

// ************************  close cart  ************************
function closeCart() {
  shoppingCart.classList.remove("active");
}
// ************************  add to cart  ************************
function shopping() {
  shoppingCart.classList.add("active");
}

// ************************  fetch products  ************************

let products = [];
async function startPage() {
  await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        let productItem = document.createElement("div");
        productItem.className = "productItem";

        let productTop = document.createElement("div");
        productTop.className = "productTop";
        productTop.innerHTML = `
          <img src="${item.image}" alt="productPicture" />
          <h3>${item.title}</h3>
          <p>${item.description.slice(0, 200)}</p>
        `;

        let productBottom = document.createElement("div");
        productBottom.className = "productBottom";

        let priceDiv = document.createElement("div");
        priceDiv.className = "price";
        priceDiv.textContent = `$ ${item.price}`;

        let orderDiv = document.createElement("div");
        orderDiv.className = "order";

        let button = document.createElement("button");
        button.className = "addToCartBtn";
        button.textContent = "add to cart";
        button.onclick = () => addToCart(item);

        orderDiv.appendChild(button);
        productBottom.appendChild(priceDiv);
        productBottom.appendChild(orderDiv);

        productItem.appendChild(productTop);
        productItem.appendChild(productBottom);

        productContainer.appendChild(productItem);
        products.push(productContainer);
      });
    })
    .catch((err) => console.log("please be patient", err.message));
}

console.log(products);

// ************************  event listeners  ************************
shoppingCart.addEventListener("click", shopping);
window.addEventListener("DOMContentLoaded", startPage);
window.addEventListener("mousedown", closeCart);

// ************************ remove from cart  ************************
function removeFromCart(productRemove) {}
// ************************  order button  ************************
function addToCart(item) {
  console.log(" added to cart:", item);

  let productItemCart = document.createElement("div");
  productItemCart.className = " productItemCart";

  let productImgCart = document.createElement("div");
  productImgCart.className = "productImgCart";
  productImgCart.innerHTML = `
  <img src="${item.image}" alt="productImg" />
  `;

  let productTitleCart = document.createElement("div");
  productTitleCart.className = "productTitleCart";
  productTitleCart.innerHTML = `
  <h3>${item.title}</h3>
  
  `;
  let productTextCart = document.createElement("div");
  productTextCart.className = "productTextCart";
  productTextCart.innerHTML = `<p>$ ${item.price}</p>`;

  let removeProduct = document.createElement("button");
  removeProduct.className = "removeBtnCart";
  removeProduct.textContent = "remove";
  removeProduct.onclick = () => removeFromCart(item);

  productTextCart.appendChild(removeProduct);

  productItemCart.appendChild(productImgCart);
  productItemCart.appendChild(productTitleCart);
  productItemCart.appendChild(productTextCart);

  shoppingCartSection.appendChild(productItemCart);
}

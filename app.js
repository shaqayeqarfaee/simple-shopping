const shoppingCart = document.querySelector(".shoppingCart");
const productContainer = document.querySelector(".products");
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");

// ************************  add to cart  ************************
function addToCart() {
  shoppingCart.classList.toggle("active");
}

// ************************  fetch products  ************************
async function startPage() {
  await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      data.forEach((item) => {
        let productItem = document.createElement("div");
        productItem.className = "productItem";

        let products = `

          <div class="productTop">
            <img src="${item.image}" alt="productPicture" />
            <h3>${item.title}</h3>
            <p>${item.description.slice(0, 200)}</p>
          </div>
          <div class="productBottom">
            <div class="price">$ ${item.price}</div>
            <div class="order">
              <button>add to cart</button>
            </div>
          </div>

        `;
        productItem.innerHTML = products;
        productContainer.appendChild(productItem);
      });
    })
    .catch((err) => console.log("please be patient", err.message));
}

// ************************  event listeners  ************************
shoppingCart.addEventListener("click", addToCart);
window.addEventListener("DOMContentLoaded", startPage);

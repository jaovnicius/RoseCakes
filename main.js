const menu = document.querySelector('.menu');
let products = [];



function createProduct(url, alt, name, price, description, dataname, dataprice) {
  const divProduct = document.createElement("div");
  divProduct.classList.add("product");

  divProduct.innerHTML = `
    <div class="img-product"><img class="img-product-element" src="${url}" alt="${alt}"></div>
    <div class="product-information">
      <h3 class="product-information-title">${name}</h3>
      <p class="product-information-paragraph">${description}</p>
      <div class="price_selection">
        <p class="price_selection_item">Preço: <span class="price">${price}</span></p>
        <button class="icon" data-name="${dataname}" data-price="${dataprice}">
          + <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/>
          </svg>
        </button>
      </div>
    </div>
  `;

  menu.appendChild(divProduct);
}


createProduct("https://i.pinimg.com/736x/ae/4c/26/ae4c26186932e8cf6fdaa0eeebf22553.jpg", "bolo no pote", "Bolo de Morango", "R$ 21,99", "Bolo fresquinho com morangos naturais.", "Morangão", "21,99");
createProduct("https://i.pinimg.com/736x/ae/4c/26/ae4c26186932e8cf6fdaa0eeebf22553.jpg", "bolo no pote", "Bolo de Morango", "R$ 21,99", "Bolo fresquinho com morangos naturais.", "Morangão", "21,99");
createProduct("https://i.pinimg.com/736x/ae/4c/26/ae4c26186932e8cf6fdaa0eeebf22553.jpg", "bolo no pote", "Bolo de Morango", "R$ 21,99", "Bolo fresquinho com morangos naturais.", "Morangão", "21,99");
createProduct("https://i.pinimg.com/736x/ae/4c/26/ae4c26186932e8cf6fdaa0eeebf22553.jpg", "bolo no pote", "Bolo de Morango", "R$ 21,99", "Bolo fresquinho com morangos naturais.", "Morangão", "21,99");




const menuContent = document.querySelector('.menu');
const product = document.querySelector('.product');
const price = document.querySelector('.price');
const checkoutBtn = document.querySelectorAll('.btn-buy');
const count = document.querySelector('.product-count');

const inputAddress = document.querySelector('.address')
const selectedProducts = document.querySelector('.selected-products')
console.log(menuContent, product);


checkoutBtn.forEach(function(btn) {
  btn.addEventListener("click", function() {
    updateProductList();
  });
});



menuContent.addEventListener("click", function (event) {


  let iconButton = event.target.closest(".icon")
  console.log(iconButton);

  if (iconButton) {
    const nameProduct = iconButton.getAttribute("data-name");
    const priceProdutc = parseFloat(iconButton.getAttribute("data-price"));
    addProduct(nameProduct, priceProdutc);
  }
})

function addProduct(name, price) {

  const productLike = products.find(item => item.name === name)
  if(productLike) {
    productLike.quantity += 1;
    return;
  } else {
    products.push({
    name,
    price,
    quantity: 1,
  })
  }


  updateProductList()
}



function updateProductList(){
  selectedProducts.innerHTML = "";
  let total = 0;

  products.forEach(item => {
    const selectedProductsElement = document.createElement("div");
    selectedProductsElement.innerHTML = `
    <div>
      <div>
        <p>Produto: ${item.name}</p>
        <p>Quantidade: ${item.quantity}</p>
        <p>Valor: R$: ${item.price}</p>
      </div>

      <div>
        <button>
          Remover
        </button>
      </div>
    </div>`

    selectedProducts.appendChild(selectedProductsElement)
  })
}
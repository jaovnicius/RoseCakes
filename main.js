const menu = document.querySelector('.menu');

function createProduct(name, price, description) {
  const divProduct = document.createElement("div");
  divProduct.classList.add("product");

  divProduct.innerHTML = `
    <div class="img-product"></div>
    <div class="product-information">
      <h3 class="product-information-title">${name}</h3>
      <p class="product-information-paragraph">${description}</p>
      <div class="price_selection">
        <p class="price_selection_item">Preço: <span class="price">${price}</span></p>
        <button class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/>
          </svg>
        </button>
      </div>
    </div>
  `;

  menu.appendChild(divProduct);
}

createProduct("Bolo de Chocolate", "R$ 19,99", "Delicioso bolo com cobertura cremosa.");
createProduct("Bolo de Morango", "R$ 21,99", "Bolo fresquinho com morangos naturais.");
createProduct("Bolo de Cenoura", "R$ 18,50", "Tradicional bolo de cenoura com calda de chocolate.");
createProduct("Bolo de Cenoura", "R$ 18,50", "Tradicional bolo de cenoura com calda de chocolate.");

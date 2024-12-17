/* 
  ProductDetailsView: Handles rendering and updating the product details view dynamically. 
  Includes methods for creating elements, rendering product content, and updating UI components.
*/
export default class ProductDetailsView {
  // Creates a new DOM element with an optional class
  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  // Fetches an existing DOM element based on a selector
  getElement(selector) {
    return document.querySelector(`${selector}`);
  }

  // Renders the product details to the wrapper container
  render(product) {
    const wrapper = this.resetHTML();
    const productsMarkup = `
      <div class="product">
        ${this.productImage(product.image)}
        ${this.productContent(product)}
      </div>
    `;
    wrapper.insertAdjacentHTML("afterbegin", productsMarkup);
  }

  // Generates markup for the product image
  productImage(image) {
    return `
      <div id="product-image" class="product__image">
        <img src=${image} />
      </div>`;
  }

  // Generates product content: title, ratings, pricing, and actions
  productContent(product) {
    return `
      <div class="product__content">
        <h1 class="product__title">${product.name}</h1>
        <div class="product__meta">
          <div class="flex">
            <img src="./assets/icons/star-full.svg" alt="star-full" />
            <img src="./assets/icons/star-full.svg" alt="star-full" />
            <img src="./assets/icons/star-full.svg" alt="star-full" />
            <img src="./assets/icons/star-half.svg" alt="star-half" />
            <img src="./assets/icons/star-outline.svg" alt="star-outline" />
            <span>(2 Reviews)</span>
          </div>
          <div class="price">
            <span id="originalPrice" class="originalPrice">$${product.originalPrice.toFixed(
              2
            )}</span>
            <span id="salePrice" class="salepirce">$${product.salePrice.toFixed(
              2
            )}</span>
          </div>
          <p class="product__details">${product.details}</p>
        </div>
        ${this.productInfo(product)}
        <div class="product__features">
          ${this.productColors(product)}
          ${this.productSizes(product)}
        </div>
        <div class="product__actions">
          ${this.productActions(product)}
        </div>
      </div>
    `;
  }

  // Generates product info: type and model number
  productInfo(product) {
    return `
      <ul class="product__info">
        <li class="product__type">
          <h3 class="text-muted">Type</h3>
          <span>${product.type}</span>
        </li>
        <li class="product__model">
          <h3 class="text-muted">Model Number</h3>
          <span>${product.model}</span>
        </li>
      </ul>
    `;
  }

  // Generates product color options
  productColors(product) {
    return `
      <div class="product__colors">
        <h3>Brand Color</h3>
        <ul id="product-color">
          ${this.updateProductColors(product)}
        </ul>
      </div>
    `;
  }

  // Generates product size options
  productSizes(product) {
    return `
      <div class="product__sizes">
        <h3>Wrist Size</h3>
        <ul id="product-size">
          ${this.updateProductSizes(product)}
        </ul>
      </div>
    `;
  }

  // Generates product actions: increment/decrement, add to cart, favorite
  productActions(product) {
    return `
      <div class="flex items-center product__actions-wrapper">
        <div class="buttons-container">
          <div class="button-group">
            <button id="decrement" class="action-btn button button--icon">
              <img src="./assets/icons/minus.svg" alt="product decrement icon" />
            </button>
            <span data-display="product-count" class="flex h-full items-center justify-center">
              ${product.count}
            </span>
            <button id="increment" class="action-btn button button--icon">
              <img src="./assets/icons/plus.svg" alt="product increment icon" />
            </button>
          </div>
        </div>
        <button id="add-to-cart" class="button button--primary">Add to Cart</button>
        <button class="fav-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6576ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.8 4.6c-1.8-1.8-4.7-1.8-6.5 0l-1.3 1.3-1.3-1.3c-1.8-1.8-4.7-1.8-6.5 0s-1.8 4.7 0 6.5l7.8 7.8 7.8-7.8c1.8-1.8 1.8-4.7 0-6.5z"></path>
          </svg>
        </button>
      </div>
    `;
  }

  // Clears wrapper HTML and returns the wrapper element
  resetHTML() {
    const wrapper = this.getElement(".wrapper");
    wrapper.innerHTML = "";
    return wrapper;
  }

  // Updates the counter display
  updateCounterDisplay(count) {
    const element = document.querySelector("[data-display='product-count']");
    element.textContent = count;
  }

  // Updates product sizes dynamically
  updateProductSizes(product) {
    const element = document.getElementById("product-size");
    const markup = product.sizes
      .map(
        (item) => `
          <li data-sid="${item.id}" data-original-price="${item.originalPrice}" 
              data-sale-price="${item.salePrice}" data-size="${item.size}" 
              class=${product.sid === item.id ? "active" : ""}>
            <button>
              <span>${item.size}</span> $${item.salePrice.toFixed(2)}
            </button>
          </li>
        `
      )
      .join("");

    if (element) {
      element.innerHTML = "";
      element.insertAdjacentHTML("afterbegin", markup);
    } else {
      return markup;
    }
  }

  // Updates product colors dynamically
  updateProductColors(product) {
    const element = document.getElementById("product-color");
    const markup = product.colors
      .map(
        (item) => `
          <li data-cid="${item.id}" data-color="${item.color}" class=${
          product.cid === item.id ? "active" : ""
        }>
          </li>
        `
      )
      .join("");

    if (element) {
      element.innerHTML = "";
      element.insertAdjacentHTML("afterbegin", markup);
    } else {
      return markup;
    }
  }

  // Updates pricing dynamically
  updateProductPricing(product) {
    document.getElementById(
      "originalPrice"
    ).textContent = `$${product.originalPrice.toFixed(2)}`;
    document.getElementById(
      "salePrice"
    ).textContent = `$${product.salePrice.toFixed(2)}`;
  }

  // Updates product image dynamically
  updateProductImage(product) {
    const element = document.getElementById("product-image");
    element.innerHTML = "";
    element.insertAdjacentHTML("afterbegin", `<img src="${product.image}"/>`);
  }
}

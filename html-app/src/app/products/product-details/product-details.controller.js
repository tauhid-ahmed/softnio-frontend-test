/* 
  ProductDetailsController: Handles the interactions between 
  the ProductDetailsModel (data) and ProductDetailsView (UI).
*/
export default class ProductDetailsController {
  constructor(model, view) {
    this.model = model; // Product data model
    this.view = view; // Product view/UI
    this.init();
  }

  // Initializes the view rendering and event handlers
  init() {
    setTimeout(() => {
      this.view.render(this.model.getProduct()); // Render initial product data
      this.attachEventHandlers(); // Attach interaction logic
    }, 0);
  }

  // Attaches all necessary event listeners for the product UI
  attachEventHandlers() {
    const product = document.querySelector(".product");

    product.addEventListener("click", (ev) => {
      const currentTarget = ev.target;

      // Handle increment button click
      if (currentTarget.id === "increment")
        this.model.incrementProductCount(this.view.updateCounterDisplay);

      // Handle decrement button click
      if (currentTarget.id === "decrement")
        this.model.decrementProductCount(this.view.updateCounterDisplay);

      // Handle product size selection
      if (currentTarget.closest("#product-size li")) {
        const element = currentTarget.closest("#product-size li");
        const sid = element.dataset.sid;
        const originalPrice = Number(element.dataset.originalPrice);
        const salePrice = Number(element.dataset.salePrice);
        const size = element.dataset.size;

        // Prepare size change data
        const data = { sid, originalPrice, salePrice, size };

        // Update model and view based on selected size
        this.model.changeProductSize(data, [
          this.view.updateProductSizes,
          this.view.updateProductPricing,
        ]);
      }

      // Handle product color selection
      if (currentTarget.closest("#product-color li")) {
        const element = currentTarget.closest("#product-color li");
        const cid = element.dataset.cid;
        const color = element.dataset.color;

        // Prepare color change data
        const data = { cid, color };

        // Update model and view based on selected color
        this.model.changeProductColor(data, [
          this.view.updateProductColors,
          this.view.updateProductImage,
        ]);
      }

      // Handle "Add to Cart" button click
      if (currentTarget.id === "add-to-cart") {
        // Prevent adding to cart if product count is zero
        if (!this.model.product.count) {
          return alert("Product count must be at least 1");
        }

        // Register product to cart and reset count
        this.registerAddToCart(this.model.product);
        this.model.product.count = 0; // Reset count
        this.view.updateCounterDisplay(this.model.product.count); // Update UI
      }
    });
  }

  // Placeholder method for adding the product to the cart
  registerAddToCart(product) {
    // Implement actual "add-to-cart" logic here
  }
}

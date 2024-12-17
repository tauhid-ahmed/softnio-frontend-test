/* 
  CartController: Manages interactions between the CartModel (data) 
  and CartView (UI), handling cart events like add-to-cart and checkout.
*/
export default class CartController {
  constructor(model, view) {
    this.model = model; // Cart data model
    this.view = view; // Cart UI view
    this.init();
  }

  // Initializes the controller by attaching event handlers
  init() {
    this.attachEventHandlers();
  }

  // Attaches event listeners for cart-related actions
  attachEventHandlers() {
    const page = document.querySelector(".page-wrapper");

    page.addEventListener("click", (ev) => {
      const currentTarget = ev.target;

      // Handle "Add to Cart" button click
      if (currentTarget.id === "add-to-cart") {
        this.view.render(this.model.getAllProductLength());
      }

      // Handle "Checkout" button click: Render cart table with details
      if (currentTarget.id === "checkout") {
        this.view.renderTable(
          this.model.getAllProducts(), // List of all products
          this.model.getAllProductLength(), // Total product count
          this.model.getTotalPrice() // Total cart price
        );
      }

      // Handle cart overlay click: Close the cart table
      if (currentTarget.classList.contains("cart-overlay")) {
        this.view.closeCartTable(currentTarget);
      }
    });
  }
}

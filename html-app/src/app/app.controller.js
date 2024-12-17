export default class AppController {
  // Constructor accepts four dependencies: appModel, appView, products, and cart
  constructor(appModel, appView, products, cart) {
    this.appModel = appModel; // Initialize the app model (handles app-wide state)
    this.appView = appView; // Initialize the app view (handles UI rendering)
    this.products = products; // Initialize the product model/controller
    this.cart = cart; // Initialize the cart model/controller
    this.init(); // Call init to set up necessary relationships
  }

  // Initialization method to set up app behavior
  init() {
    // Register the cart with the product controller/model to allow product-to-cart interactions
    this.products.registerToCart(this.cart);
  }
}

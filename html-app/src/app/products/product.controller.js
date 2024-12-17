export default class ProductController {
  // Constructor accepts dependencies: the product model, view, and product details controller
  constructor(productModel, productView, productDetails) {
    this.productModel = productModel; // The model that handles product data
    this.productView = productView; // The view responsible for rendering the product
    this.productDetails = productDetails; // The controller for managing detailed product logic (e.g., color, size)
    this.cart = null; // A placeholder for the cart, which will be set later
    this.init(); // Initialize the controller
  }

  // Initialization function that sets up product details and the add-to-cart functionality
  init() {
    // Fetch product data by product ID
    const product = this.productModel.getProductById();

    // Initialize product details with the fetched product data
    this.productDetails.model.initProductDetails(product);

    // Set up the add-to-cart functionality on the product details page
    // When the add-to-cart action is triggered in the product details, add the product to the cart
    this.productDetails.registerAddToCart = (product) =>
      this.cart.model.addToCart(product);
  }

  // Register the cart object so that the controller can interact with the cart
  registerToCart(cart) {
    this.cart = cart; // Set the cart instance
  }
}

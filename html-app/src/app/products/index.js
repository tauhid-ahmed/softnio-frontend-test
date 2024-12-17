// Import the necessary components for the product page
import ProductModel from "./product.model.js"; // Handles the product data (business logic)
import ProductView from "./product.view.js"; // Responsible for rendering the product details on the UI
import ProductController from "./product.controller.js"; // Links the model and view, manages events
import productDetailsController from "./product-details/index.js"; // Handles product details page logic

// Instantiate the ProductModel to manage product data
const productModel = new ProductModel();

// Instantiate the ProductView to render the product UI
const productView = new ProductView();

// Instantiate the ProductController to connect the model, view, and handle interactions
const productController = new ProductController(
  productModel, // Passing the ProductModel instance for data management
  productView, // Passing the ProductView instance to handle rendering
  productDetailsController // Passing the productDetailsController to manage details-specific logic
);

// Export the main product controller instance for use throughout the app
export default productController;

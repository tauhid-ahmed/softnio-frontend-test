// Import Model, View, and Controller components
import ProductDetailsController from "./product-details.controller.js";
import ProductDetailsModel from "./product-details.model.js";
import ProductDetailsView from "./product-details.view.js";

// Instantiate the Model and View
const productDetailsModel = new ProductDetailsModel(); // Handles product data
const productDetailsView = new ProductDetailsView(); // Handles product UI

// Instantiate the Controller, connecting the Model and View
const productDetailsController = new ProductDetailsController(
  productDetailsModel,
  productDetailsView
);

// Export the controller for use in the application
export default productDetailsController;

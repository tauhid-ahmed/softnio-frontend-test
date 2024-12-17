// Import CartController, CartModel, and CartView to manage the cart functionality
import CartController from "./cart.controller.js";
import CartModel from "./cart.model.js";
import CartView from "./cart.view.js";

// Instantiate the Cart model and view
const model = new CartModel(); // Handles cart data
const view = new CartView(); // Manages cart UI

// Instantiate and export the CartController, connecting the model and view
export default new CartController(model, view);

import AppController from "./app.controller.js";
import AppModel from "./app.model.js";
import AppView from "./app.view.js";
import productController from "./products/index.js";
import cart from "./cart/cart.module.js";

const appModel = new AppModel();
const appView = new AppView();

(() => {
  new AppController(appModel, appView, productController, cart);
})();

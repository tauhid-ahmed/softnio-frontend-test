/* 
  ProductDetailsModel: Manages the product data and handles state changes 
  (e.g., count, size, color) with updates passed to UI handlers.
*/
export default class ProductDetailsModel {
  constructor() {
    this.product = {}; // Product state
  }

  // Initializes the product with given data
  initProductDetails(product) {
    this.product = product;
  }

  // Returns the current product data
  getProduct() {
    return this.product;
  }

  // Increments product count (max limit: 20) and updates UI via handler
  incrementProductCount(handler) {
    const newCount = Math.min(this.product.count + 1, 20);
    this.product = { ...this.product, count: newCount };
    handler(newCount);
  }

  // Decrements product count (min limit: 0) and updates UI via handler
  decrementProductCount(handler) {
    const newCount = Math.max(this.product.count - 1, 0);
    this.product = { ...this.product, count: newCount };
    handler(newCount);
  }

  // Updates product size and pricing, triggers handlers for UI updates
  changeProductSize(data, handlers) {
    this.product.sid = data.sid;
    this.product.originalPrice = data.originalPrice;
    this.product.salePrice = data.salePrice;
    this.product.size = data.size;

    handlers.forEach((handler) =>
      handler({ ...data, sizes: this.product.sizes })
    );
  }

  // Updates product color and image, triggers handlers for UI updates
  changeProductColor(data, handlers) {
    this.product.cid = data.cid;
    this.product.color = data.color;

    // Retrieve the new image based on the selected color
    const productImage = this.product.colors.find(
      (item) => item.id == data.cid
    ).image;

    this.product.image = productImage;

    handlers.forEach((handler) =>
      handler({ ...data, image: productImage, colors: this.product.colors })
    );
  }
}

import { products } from "../data.js";

export default class ProductModel {
  // The constructor initializes the products data by processing it
  constructor() {
    // Initializes the products by calling the `updateProductData` method to reformat the data.
    this.products = this.updateProductData(products);
  }

  // This method transforms the raw product data into a more usable shape
  updateProductData(products) {
    return products.map((product) => {
      // Find the default color and size for the product
      const defaultColorData = [...product.colors].find(
        (color) => color.default
      );
      const defaultSizeData = [...product.sizes].find((size) => size.default);

      // Construct the updated product object with the necessary fields
      const updatedProduct = {
        ...product, // Spread original product fields
        cid: defaultColorData.id, // Color ID for the default color
        sid: defaultSizeData.id, // Size ID for the default size
        image: defaultColorData.image, // Image corresponding to the default color
        originalPrice: defaultSizeData.originalPrice, // Original price for the default size
        salePrice: defaultSizeData.salePrice, // Sale price for the default size
        count: 0, // Initially, product count is 0
        size: defaultSizeData.size, // Default size
        color: defaultColorData.color, // Default color
        model: product.modelNumber, // Model number (if needed)
      };

      // Return the updated product
      return updatedProduct;
    });
  }

  // Retrieve all products
  getAllProducts() {
    return this.products;
  }

  // Retrieve a product by its unique productId
  getProductById(productId = "HBaMPvBqLBsGZWQrSKI") {
    return this.products.find((product) => product.id === productId);
  }
}

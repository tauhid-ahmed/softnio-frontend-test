/* 
  CartModel: Manages the cart data, including product additions, 
  total calculations, and retrieval of cart details.
*/
export default class CartModel {
  constructor() {
    this.cartList = []; // Array to store cart items
  }

  // Adds a product to the cart or updates the count if it already exists
  addToCart(product) {
    const existingProduct = this.findExistingProduct(product);

    if (existingProduct) {
      existingProduct.count += product.count; // Increment count for existing product
    } else {
      this.cartList.push({ ...product }); // Add new product to the cart
    }
  }

  // Finds if the product with the same ID, size, and color exists in the cart
  findExistingProduct(product) {
    const nextProductId = product.id + product.sid + product.cid; // Unique product identifier

    return this.cartList.find(
      (cartItem) => cartItem.id + cartItem.sid + cartItem.cid === nextProductId
    );
  }

  // Returns the total count of all products in the cart
  getAllProductLength() {
    return this.cartList.reduce((total, product) => total + product.count, 0);
  }

  // Returns the entire list of products in the cart
  getAllProducts() {
    return this.cartList;
  }

  // Calculates the total price of all products in the cart
  getTotalPrice() {
    return this.cartList.reduce(
      (totalPrice, item) => totalPrice + item.count * item.salePrice,
      0
    );
  }
}

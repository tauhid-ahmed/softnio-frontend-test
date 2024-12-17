/* 
  CartView: Manages the UI for the cart, including rendering cart items, 
  checkout button, and cart overlay.
*/
export default class CartView {
  // The container element where cart content will be rendered
  container = document.getElementById("checkout-container");

  // Element for the cart portal (overlay for displaying cart details)
  cartPortal = document.createElement("div");

  // Generates the HTML markup for the checkout button with a badge showing total items
  markup(data) {
    return `<button class="button button--secondary" id="checkout">Checkout <span class='badge'>${data}</span></button>`;
  }

  // Renders the checkout button with the current item count (badge) into the container
  render(data) {
    if (data) {
      this.container.innerHTML = ""; // Clear existing content
      this.container.insertAdjacentHTML("afterbegin", this.markup(data)); // Insert new button
    }
  }

  // Renders a detailed cart table with all cart items, their quantity, price, and total summary
  renderTable(data, totalProducts, totalPrice) {
    this.container.append(this.cartPortal); // Append the cart overlay to the container
    this.cartPortal.innerHTML = ""; // Clear any existing content in the portal
    this.cartPortal.classList.add("cart-overlay"); // Add a class for styling the overlay

    // Insert the HTML markup for the cart table with products and totals
    this.cartPortal.insertAdjacentHTML(
      "afterbegin",
      ` <div class="cart">
          <h2 class="cart__title">Your Cart</h2>
          <div class="cart__table">
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Color</th>
                  <th>Size</th>
                  <th>Qnt</th>
                  <th>Price</th>
                </tr>
              </thead>
             <tbody>
                ${data
                  .map(
                    (product) =>
                      ` <tr>
                      <td>
                        <div class="flex items-center">
                          <span class="cart__image">
                            <img src="${product.image}" alt="${product.title}"/>
                          </span>
                          <span>${product.name}</span>
                        </div>
                      </td>
                      <td>
                        <span>${product.color}</span>
                      </td>
                      <td>
                        <span>${product.size}</span>
                      </td>
                      <td>
                        <span>${product.count}</span>
                      </td>
                      <td>
                        <span>$${(product.count * product.salePrice).toFixed(
                          2
                        )}</span>
                      </td>
                    </tr>`
                  )
                  .join("")}
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <span style="color: #373737">Total</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td>${totalProducts}</td>
                  <td>$${totalPrice.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
            <div class="flex items-center cart__footer">
              <button class="button button--outline button--rounded">Continue Shopping</button>
              <button class="button button--primary">Checkout</button>
            </div>
          </div>
        </div>`
    );
  }

  // Closes the cart overlay by removing it from the container
  closeCartTable(element) {
    this.container.removeChild(element); // Remove the cart overlay from the DOM
  }
}

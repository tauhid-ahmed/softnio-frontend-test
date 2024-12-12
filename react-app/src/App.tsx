import { createPortal } from "react-dom";
import { products } from "./data";
import { ProductView } from "./components/products";
import { Cart } from "./components/cart";
import { Checkout } from "./components/products/checkout";
import { useStore } from "./components/products/store";

function App() {
  const [product] = products;
  const { store, openCart, addToCart } = useStore();
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="grow flex md:items-center">
          <ProductView addToCart={addToCart} product={product} />
        </div>
        {store.cart.length > 0 && (
          <div className="container py-5 flex justify-center lg:absolute bottom-0 inset-x-0">
            <Checkout cart={store.cart} openCart={openCart} />
          </div>
        )}
      </div>
      {store.isCartOpen &&
        createPortal(<Cart cart={store.cart} />, document.body)}
    </>
  );
}

export default App;

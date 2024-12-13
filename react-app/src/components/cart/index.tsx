import { Button } from "../button";
import { type CartItem } from "../products/types";

export function Cart({ cart }: { cart: CartItem[] }) {
  if (cart.length < 1) return;
  const productsInCart = cart.map((product) => ({
    ...product,
    price: product.salePrice * product.count,
  }));

  const totalPrice = productsInCart.reduce((acc, cur) => acc + cur.price, 0);
  const totalProducts = cart.reduce((acc, cur) => acc + cur.count, 0);

  return (
    <div className="flex h-full w-full items-center justify-center px-6 bg-[#11121B]/55 fixed inset-0">
      <div className="max-w-162 w-full p-6 md:p-11 min-h-96 bg-white rounded-2.5xl space-y-4">
        <h2 className="text-5.5xl font-bold text-gray-500">Your Cart</h2>
        <table className="text-sm w-full text-center [&_td:nth-child(1)]:text-left [&_th:nth-child(1)]:text-left [&_td]:text-center [&_td:nth-child(5)]:text-right [&_th:nth-child(5)]:text-right">
          <thead className="text-gray-300 overflow-hidden">
            <tr className="border-b">
              <th className="font-normal py-2">Item</th>
              <th className="font-normal py-2">Color</th>
              <th className="font-normal py-2">Size</th>
              <th className="font-normal py-2">Qtn</th>
              <th className="font-normal py-2">Price</th>
            </tr>
          </thead>
          <tbody className="text-gray-500 text-center">
            {productsInCart.map((product) => (
              <tr className="border-b">
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <img src={product.image} className="size-9 rounded" />
                    Classy Modern Smart watch
                  </div>
                </td>
                <td className="p-4 capitalize">{product.color}</td>
                <td className="p-4 font-bold">{product.size}</td>
                <td className="p-4">{product.count}</td>
                <td className="py-4 font-bold">${product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="">
              <td className="text-base py-4 text-[#373737]">Total</td>
              <td></td>
              <td></td>
              <td className="py-4 font-bold text-gray-500">{totalProducts}</td>
              <td className="text-lg font-bold py-4 text-gray-500">
                ${totalPrice.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="flex justify-end gap-6">
          <Button variant="outline">Continue Shopping</Button>
          <Button>Checkout</Button>
        </div>
      </div>
    </div>
  );
}

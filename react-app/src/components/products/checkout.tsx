import { Button } from "../button";
import { Badge } from "../badge";

export function Checkout({ cart, openCart }) {
  const cartLength = cart.reduce((acc, cur) => acc + cur.count, 0);

  return (
    <Button onClick={() => openCart()} variant="secondary" size="pill">
      Checkout <Badge cartLength={cartLength} />
    </Button>
  );
}

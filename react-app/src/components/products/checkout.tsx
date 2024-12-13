import { Button } from "../button";
import { Badge } from "../badge";
import { Store } from "./types";

export function Checkout({ cart, openCart }: Store & { openCart: () => void }) {
  const cartLength = cart.reduce((acc, cur) => acc + cur.count, 0);

  return (
    <Button onClick={openCart} variant="secondary" size="pill">
      Checkout <Badge cartLength={cartLength} />
    </Button>
  );
}

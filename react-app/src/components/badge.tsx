export function Badge({ cartLength }: { cartLength: number }) {
  return (
    <span className="bg-white flex items-center justify-center rounded-md font-bold text-xs size-5">
      {cartLength}
    </span>
  );
}

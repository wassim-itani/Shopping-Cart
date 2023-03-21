import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { clearCart } from "../../store/features/cartSlice";
import Button from "../Button";
import CartItem from "../CartItem";

const Dropdown = () => {
  const { cartItems, totalPrice } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const checkout = (): void => alert("Thank you for purchasing from Market :)");
  const clear = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatch(clearCart());
  };

  return (
    <div className="absolute top-10 right-5 z-10 w-80 bg-white rounded shadow-md animate-fadeIn">
      <div className="h-52 overflow-auto">
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => {
              return <CartItem key={item.name} {...item} />;
            })}
          </ul>
        ) : (
          <p className="absolute top-1/2 left-1/2 text-gray-500 text-lg font-medium -translate-x-1/2 -translate-y-1/2">
            No cart items :c
          </p>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="p-3">
          <p className="mb-1 text-gray-500 font-medium">
            Total: {totalPrice.toFixed(2)}$
          </p>
          <div className="flex gap-1">
            <Button
              type="button"
              className="w-1/2 p-1 bg-green-500 hover:bg-green-600 transition "
              onClick={checkout}
            >
              Checkout
            </Button>
            <Button
              type="button"
              className="w-1/2 p-1 bg-red-500 hover:bg-red-600 transition "
              onClick={clear}
            >
              Clear Cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

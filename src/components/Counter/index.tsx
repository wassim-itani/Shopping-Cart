import { useAppSelector } from "../../hooks/storeHooks";

const Counter = () => {
  const count = useAppSelector((state) => state.cart.cartItems.length);
  return (
    <span className="absolute -top-1 -right-1 flex justify-center items-center w-5 h-5 bg-black text-white text-xs rounded-full">
      {count}
    </span>
  );
};

export default Counter;

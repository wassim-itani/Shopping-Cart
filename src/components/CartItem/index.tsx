import { FaTimes } from "react-icons/fa";
import { useAppDispatch } from "../../hooks/storeHooks";
import { CartItemType, removeItem } from "../../store/features/cartSlice";

const CartItem = (item: CartItemType) => {
  const dispatch = useAppDispatch();

  const deleteItem = () => {
    dispatch(removeItem(item));
  };

  return (
    <li className="flex items-center gap-5 p-2 bg-white text-gray-500 hover:bg-gray-100 transition">
      <div className="flex justify-center w-12 h-12 items-center bg-white">
        <img src={item.image} alt={item.name} className="w-2/3 h-2/3" />
      </div>
      <div className="grow">
        <p>{item.name} - 1kg</p>
        <p className="font-medium">{item.price}$</p>
      </div>
      <div>
        <p>{item.quantity}Kg</p>
        <p className="font-medium">
          {(item.quantity * item.price).toFixed(2)}$
        </p>
      </div>
      <div className="hover:text-red-500 transition" onClick={deleteItem}>
        <FaTimes />
      </div>
    </li>
  );
};

export default CartItem;

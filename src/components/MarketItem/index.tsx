import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useAppDispatch } from "../../hooks/storeHooks";
import { ItemType } from "../../store/features/marketSlice";
import { addItem } from "../../store/features/cartSlice";
import Button from "../Button";

const MarketItem = ({ name, image, price }: ItemType) => {
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();

  const decrementQuantity = (): void => {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity <= 0 ? 1 : newQuantity);
  };

  const incrementQuantity = (): void => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    dispatch(addItem({ name, image, price, quantity }));
  };

  return (
    <li className="market-item p-4 bg-white rounded hover:shadow-md transition animate-fadeIn">
      <img
        src={image}
        alt={name}
        title={name}
        className="w-32 h-32 mb-2 mx-auto scale-100 hover:scale-105 transition-transform"
      />
      <div className="text-gray-600 text-center">
        <h2>{`${name} - 1Kg`}</h2>
        <p className="mb-3 font-medium text-lg">{`${price.toFixed(2)}$`}</p>
        <div className="flex justify-center items-center gap-2 mb-4">
          <AiOutlineMinusCircle
            className="text-xl cursor-pointer hover:text-red-500 transition"
            onClick={decrementQuantity}
          />
          <p className="text-lg font-bold">{quantity}</p>
          <AiOutlinePlusCircle
            className="text-xl cursor-pointer hover:text-red-500 transition"
            onClick={incrementQuantity}
          />
        </div>
        <Button
          className="block w-3/4 mx-auto p-2 bg-red-500 hover:bg-red-600 transition"
          onClick={addToCart}
        >
          Add to Cart
        </Button>
      </div>
    </li>
  );
};

export default MarketItem;

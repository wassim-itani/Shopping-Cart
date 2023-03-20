import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Counter from "../Counter";
import Dropdown from "../Dropdown";

const Cart = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="relative cursor-pointer" onClick={toggleDropdown}>
      <FaShoppingCart className="text-4xl text-red-500" />
      <Counter />
      {isCollapsed && <Dropdown />}
    </div>
  );
};

export default Cart;

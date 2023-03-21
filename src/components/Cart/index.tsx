import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Counter from "../Counter";
import Dropdown from "../Dropdown";

const Cart = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    window.addEventListener(
      "click",
      (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const cartDiv = document.getElementById("cart")!;
        if (!cartDiv.contains(target) && !target.closest(".market-item")) {
          setIsCollapsed(false);
        }
      },
      true
    );
  }, []);

  return (
    <div id="cart" className="relative cursor-pointer">
      <div onClick={toggleDropdown}>
        <FaShoppingCart className="text-4xl text-red-500" />
        <Counter />
      </div>
      {isCollapsed && <Dropdown />}
    </div>
  );
};

export default Cart;

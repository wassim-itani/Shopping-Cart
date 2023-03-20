import Logo from "../Logo";
import SearchMarket from "../SearchMarket";
import Cart from "../Cart";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="flex justify-between items-center max-w-5xl mx-auto p-6">
        <Logo title="Market" />
        <SearchMarket />
        <Cart />
      </div>
    </header>
  );
};

export default Header;

import Logo from "../Logo";
import SearchMarket from "../SearchMarket";
import Cart from "../Cart";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="relative flex justify-between items-center max-w-5xl mx-auto p-4 min-[426px]:p-5">
        <Logo title="Market" />
        <div className="flex items-center gap-4">
          <SearchMarket />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;

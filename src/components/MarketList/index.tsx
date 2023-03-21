import { useAppSelector } from "../../hooks/storeHooks";
import MarketItem from "../MarketItem";

const MarketList = () => {
  const items = useAppSelector((state) => state.market.filteredItems);
  return (
    <div className="py-8">
      {items.length === 0 ? (
        <p className="text-red-500 text-lg font-bold text-center">
          Oops! Item(s) not found.
        </p>
      ) : (
        <ul className="grid min-[426px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => {
            return <MarketItem key={item.name} {...item} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default MarketList;

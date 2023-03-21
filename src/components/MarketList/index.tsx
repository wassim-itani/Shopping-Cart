import { useAppSelector } from "../../hooks/storeHooks";
import MarketItem from "../MarketItem";

const MarketList = () => {
  const items = useAppSelector((state) => state.market.filteredItems);
  return (
    <div className="mt-12">
      {items.length === 0 ? (
        <p className="text-red-500 text-lg font-bold text-center">
          Oops! Item(s) not found.
        </p>
      ) : (
        <ul className="grid grid-cols-4 gap-4">
          {items.map((item) => {
            return <MarketItem key={item.name} {...item} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default MarketList;

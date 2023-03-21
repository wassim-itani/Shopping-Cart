import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchItems } from "../../store/features/marketSlice";

const SearchMarket = () => {
  const [query, setQuery] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchItems(query));
  }, [query]);

  const changeQuery = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      className="w-72 py-1 px-2 text-gray-600 border-2 border-red-500 outline-0"
      placeholder="Search the market..."
      onChange={changeQuery}
    />
  );
};

export default SearchMarket;

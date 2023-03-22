import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { searchItems } from "../../store/features/marketSlice";

const SearchMarket = () => {
  const [query, setQuery] = useState<string>("");
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchItems(query));
  }, [query]);

  const changeQuery = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const showSearch = (): void => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <div
        className="text-red-500 text-3xl min-[426px]:hidden"
        onClick={showSearch}
      >
        <FaSearch />
      </div>
      <div
        className={`absolute inset-0 z-10 ${
          isHidden ? "hidden" : "flex"
        } justify-between items-center gap-4 p-4 bg-white min-[426px]:hidden`}
      >
        <div className="text-red-500" onClick={showSearch}>
          <FaArrowLeft />
        </div>
        <input
          type="text"
          value={query}
          className="grow py-1 px-2 text-gray-600 border-2 border-red-500 focus:outline-0"
          placeholder="Search the market..."
          onChange={changeQuery}
        />
      </div>
      <input
        type="text"
        value={query}
        className="hidden w-72 py-1 px-2 text-gray-600 border-2 border-red-500 min-[426px]:block focus:outline-0"
        placeholder="Search the market..."
        onChange={changeQuery}
      />
    </>
  );
};

export default SearchMarket;

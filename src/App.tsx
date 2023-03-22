import { useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";
import { useAppDispatch, useAppSelector } from "./hooks/storeHooks";
import { fetchMarketItems } from "./store/features/marketSlice";
import Header from "./components/Header";
import MarketList from "./components/MarketList";

const App = () => {
  const isLoading = useAppSelector((state) => state.market.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMarketItems("/Data.json"));
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed flex justify-center items-center w-screen h-screen">
          <GridLoader />
        </div>
      ) : (
        <>
          <Header />
          <main className="max-w-5xl mx-auto px-4 min-[426px]:px-5">
            <MarketList />
          </main>
        </>
      )}
    </>
  );
};

export default App;

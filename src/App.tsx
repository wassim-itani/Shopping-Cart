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

  if (isLoading) return <GridLoader className="fixed bottom-1/2 right-1/2" />;
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-6">
        <MarketList />
      </main>
    </>
  );
};

export default App;

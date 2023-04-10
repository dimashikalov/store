import { useEffect } from "react";
import SearchAppBar from "./components/AppBar/AppBar";
import AppRouter from "./components/AppRouter";
import { fetchProducts } from "./store/products/productsActionCreator";
import { useAppDispatch } from "./hooks/redux";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <SearchAppBar />
      <AppRouter />
    </>
  );
}

export default App;

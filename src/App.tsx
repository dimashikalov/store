import { useContext, useEffect } from "react";
import SearchAppBar from "./components/AppBar/AppBar";
import AppRouter from "./components/AppRouter";
import {
  fetchCategories,
  fetchProducts,
} from "./store/products/productsActionCreator";
import { useAppDispatch } from "./hooks/redux";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <SearchAppBar />
      <AppRouter />
    </>
  );
}

export default App;

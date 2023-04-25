import { lazy, useContext, useEffect, Suspense } from "react";
import SearchAppBar from "./components/AppBar/AppBar";
// import AppRouter from "./components/AppRouter";
import {
  fetchCategories,
  fetchProducts,
} from "./store/products/productsActionCreator";
import { useAppDispatch } from "./hooks/redux";

const AppRouter = lazy(() => import("./components/AppRouter"));

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <SearchAppBar />
      <Suspense>
        <AppRouter />
      </Suspense>
    </>
  );
}

export default App;

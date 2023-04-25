import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import BasketProvider from "./context/basket/basketContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={setupStore}>
    <BasketProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BasketProvider>
  </Provider>
);

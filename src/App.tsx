import Home from "./views/Home.tsx";
import Details from "./views/Details.tsx";
import Cart from "./views/Cart.tsx";
import OnSale from "./views/OnSale.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./views/NotFound.tsx";
import store from "./store/index.ts";
import { Provider } from "react-redux";

function App() {
  const browserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/details/:id", element: <Details /> },
    { path: "/cart", element: <Cart /> },
    { path: "/onsale", element: <OnSale /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={browserRouter} />
    </Provider>
  );
}
export default App;
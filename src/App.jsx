import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home";
import ShopPage from "./Pages/ShopPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import CartPage from "./Components/Cart";
import WishlistPage from "./Components/Wishlist";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:categorySlug",
        element: <ShopPage />,
      },
      {
        path: "/shop/product/:productSlug",
        element: <ProductDetailsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
      {
        path: "/about",
        element: <div>About Page</div>,
      },
      {
        path: "/contact",
        element: <div>Contact Page</div>,
      },
      {
        path: "*",
        ErrorBoundary: () => <div>404 Not Found</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;

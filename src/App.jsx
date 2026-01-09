import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home";
import ShopPage from "./Pages/ShopPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import CartPage from "./Components/Cart";
import WishlistPage from "./Components/Wishlist";
import AboutUs from "./Pages/AboutPage";
import ContactUs from "./Pages/ContactPage";
import TermsAndConditions from "./Pages/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

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
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/terms",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
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

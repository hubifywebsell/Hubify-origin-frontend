import { Route, Routes, useLocation } from "react-router-dom";
import Header, { ProductNews, TtitleBar,} from "../components/header";
import { ProductPage } from "./productPage";
import ProductOverview from "./productOverview";

import CartPage from "./cart";
import CheckoutPage from "./checkout";
import About from "./About";
import Contact from "./Contact";
import Settings from "./settings";
import MainHeader from "../components/header";
import NotFoundPage from "./notFoundPage";

  



export default function HomePage() {
  const location = useLocation();

  return (
    <div className="w-auto h-auto bg-white">
      <MainHeader/>
     

      {/* Show TitleBar + ArivleBar only on homepage ("/" or "/products") */}
      {(location.pathname === "/") && (
        <>
          <ProductNews/>
          
        </>
      )}
       <TtitleBar />

      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/overview/:id" element={<ProductOverview />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<NotFoundPage/>} />
      </Routes>

    </div>
  );
}

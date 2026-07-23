import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/ui/Loader";
import ScrollProgress from "./components/ui/ScrollProgress";
import CursorGlow from "./components/ui/CursorGlow";
import BackToTop from "./components/ui/BackToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import HowToOrder from "./pages/HowToOrder";
import Gallery from "./pages/Gallery";
import VerifyAccount from "./pages/VerifyAccount";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg font-body text-white">
      <Loader />
      <ScrollProgress />
      <CursorGlow />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/how-to-order" element={<HowToOrder />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/verify-account" element={<VerifyAccount />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

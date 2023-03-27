import { BrowserRouter, Route, Routes } from "react-router-dom";

//*components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShopDetails from "./components/ShopDetails";
import Categories from "./components/Categories";

//* pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

//*style
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:id" element={<ShopDetails />} />
            <Route path="shop/category/:department" element={<Categories />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

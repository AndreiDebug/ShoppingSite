import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState({});
  const addToCart = (productId) => {
    const qty = productId in cartItems ? cartItems[productId] + 1 : 1;
    setCartItems((prevCartItems) => ({ ...prevCartItems, [productId]: qty }));
  };

  console.log(cartItems);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop AddToCart={addToCart} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details" />
          {/* Detaliile fiecarui produs-content apge-ul */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;

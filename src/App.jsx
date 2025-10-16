import "./App.css";
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { books } from "./data";
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    const dupeItem = cart.find((item) => +item.id === +book.id);
    if (dupeItem) {
      setCart(
        cart.map((item) =>
          item.id === dupeItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  }

  function updateCart(item, newQuantity) {
    setCart((oldCart) =>
      oldCart.map((oldItem) =>
        oldItem.id === item.id ? { ...oldItem, quantity: newQuantity } : oldItem
      )
    );
  }

  function removeCart(item) {
    setCart((oldCart) => oldCart.filter((cartItem) => cartItem.id !== item.id));
  }

  function numberOfItems() {
    return cart.reduce((count, item) => count + +item.quantity, 0);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function calcPrices() {
    let total = cart.reduce(
      (sum, item) => sum + (item.salePrice || item.originalPrice) * item.quantity,
      0
    );
    return {
      subtotal: (total * 0.9).toFixed(2),
      tax: (total * 0.1).toFixed(2),
      total,
    };
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={<BookInfo books={books} addToCart={addToCart} cart={cart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateCart={updateCart}
                totals={calcPrices()}
                removeCart={removeCart}
              />
            }
          />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import React, { useEffect } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { books } from "./data";
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    const dupeItem = cart.find((item) => +item.id === +book.id);
    if (dupeItem) {
      setCart(
        cart.map((item) => {
          if (item.id === dupeItem.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        })
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  }

  function updateCart(item, newQuantity) {
    setCart((oldCart) =>
      oldCart.map((oldItem) => {
        if (oldItem.id === item.id) {
          return {
            ...oldItem,
            quantity: newQuantity,
          };
        } else {
          return oldItem;
        }
      })
    );
  }

  function removeCart(item) {
    setCart((oldCart) => oldCart.filter((cartItem) => cartItem.id !== item.id));
  }

  function numberOfItems() {
    let count = 0;
    cart.forEach((item) => {
      count += +item.quantity;
    });
    return count;
  }
  
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function calcPrices() {
    let total = 0;
    cart.forEach((item) => {
      total += (item.salePrice || item.originalPrice) * item.quantity;
    });
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
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
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
      </div>
    </Router>
  );
}

export default App;

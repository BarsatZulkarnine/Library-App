import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmptyCart from "../assets/empty_cart.svg";

const Cart = ({ cart, updateCart, removeCart, totals }) => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((cart) => {
                  return (
                    <div className="cart__item">
                      <div className="cart__book">
                        <img
                          src={cart.url}
                          alt=""
                          className="cart__book--img"
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {cart.title}
                          </span>
                          {cart.salePrice ? (
                            <span className="cart__book--price">
                              ${cart.salePrice.toFixed(2)}
                            </span>
                          ) : (
                            <span className="cart__book--price">
                              ${cart.originalPrice.toFixed(2)}
                            </span>
                          )}

                          <button
                            className="cart__book--remove"
                            onClick={() => removeCart(cart)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          value={cart.quantity}
                          onChange={(event) =>
                            updateCart(cart, event.target.value)
                          }
                          className="cart__input "
                        />
                      </div>
                      <div className="cart__total">
                        $
                        {(
                          cart.quantity * (cart.salePrice || cart.originalPrice)
                        ).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
              {cart.length ===  0 && (
                <div className="cart__empty">
                  <img src={EmptyCart} alt="" className="cart__empty--img" />
                  <h2>You dont have any books in your cart!</h2>
                  <Link to="/books">
                    <button className="btn">Browse books</button>
                  </Link>
                </div>
              )}
            </div>
            {cart && cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${totals.subtotal}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${totals.tax}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${totals.total.toFixed(2)}</span>
                </div>
                <button
                  className="btn btn__checkout no-cursor"
                  onClick={() => alert("Havnet got arround to doing this :(")}
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;

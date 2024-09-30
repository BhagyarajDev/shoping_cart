import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DecrementProductQuantity, incrementProductQuantity, RemoveCart } from '../CartSlice';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems
    .map((item) => item.price * item.productQuantity)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shopping Cart</h2>
      <div className="row">
        <div className="col-md-8">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="card mb-3 cart-item" key={index}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.image || "https://via.placeholder.com/150"}
                      className="img-fluid rounded-start cart-item-image"
                      alt={item.name}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text text-muted">${item.price}</p>
                      <div className="d-flex align-items-center mb-3">
                        <button className="btn btn-danger me-2" onClick={() => dispatch(incrementProductQuantity(item.id))}>
                          +
                        </button>
                        <small className="text-muted cart-quantity">Qty: {item.productQuantity}</small>
                        <button className="btn btn-danger ms-2" onClick={() => dispatch(DecrementProductQuantity(item.id))}>
                          -
                        </button>
                      </div>
                      <button className="btn btn-primary" onClick={() => dispatch(RemoveCart(item.id))}>
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body order-summary">
              <h5 className="card-title">Order Summary</h5>
              <p className="card-text">Total Items: {cartItems.length}</p>
              <p className="card-text total-amount">
                Total Price: ${Math.floor(totalAmount)}
              </p>
              <button className="btn btn-primary btn-block">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

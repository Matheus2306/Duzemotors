import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CardCarrinho from "./CardCarrinho";

const ItensDocarrinho = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  const handleRemoveItem = (indexToRemove) => {
    // Remove the item from the cart
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);

    // Update the state and local storage
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload(); // Reload the page to reflect changes
  };

  const handleDecrementItem = (indexToDecrement) => {
    // Decrement the quantity of the item
    const updatedCart = [...cartItems];
    if (updatedCart[indexToDecrement].quantity > 1) {
      updatedCart[indexToDecrement].quantity -= 1;
    } else {
      // If quantity is 1, remove the item
      updatedCart.splice(indexToDecrement, 1);
    }

    // Update the state and local storage
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload(); // Reload the page to reflect changes
  };

  const handleIncrementItem = (indexToIncrement) => {
    // Increment the quantity of the item
    const updatedCart = [...cartItems];
    updatedCart[indexToIncrement].quantity += 1;

    // Update the state and local storage
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload(); // Reload the page to reflect changes
  };

  const handleClick = () => {
    navigate("/catalogo");
  };

  //função de multiplicar o preço pela quantidade
  const calculateTotalPrice = (price, quantidade) => {
    return price * quantidade;
  };

  return (
    <div className="w-100 shadow bg-light rounded-3 p-4">
      <div className="mb-2 border-bottom p-1">
        <span className="fs-5 fw-semibold">
          Itens do carrinho ({cartItems.length})
        </span>
      </div>
      <div
        className="d-flex flex-column align-items-center gap-3 overflow-y-scroll"
        style={{ maxHeight: "500px", minHeight: "500px" }}
      >
        {cartItems.length === 0 ? (
          <div
            className="alert alert-danger text-center mt-5 w-100"
            role="alert"
          >
            O carrinho está vazio!
          </div>
        ) : (
          cartItems.map((item, index) => (
            <CardCarrinho
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              onRemove={() => handleRemoveItem(index)} // Pass the remove handler
              onDecrement={() => handleDecrementItem(index)} // Pass the decrement handler
              onIncrement={() => handleIncrementItem(index)} // Pass the increment handler
              calculateTotalPrice={calculateTotalPrice}
            />
          ))
        )}
      </div>
      <div className="p-3 d-flex align-items-center border-top mt-4">
        <span
          role="button"
          onClick={handleClick}
          className="p-2 border-1 shadow-sm"
        >
          Continuar Comprando
        </span>
      </div>
    </div>
  );
};

export default ItensDocarrinho;

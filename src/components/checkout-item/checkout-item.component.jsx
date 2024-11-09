import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity, id } = item;

  const { incrementCount, decrementCount, removeFromCart } =
    useContext(CartContext);

  const inc = () => incrementCount(id);
  const dec = () => decrementCount(id);
  const rem = () => removeFromCart(id);

  return (
    <div className="checkout-container">
      <div>
        <img src={imageUrl} alt={`${name} image`} />
        <h2>{name}</h2>
        <span className="dec" onClick={dec}>
          Decrease
        </span>
        <span>{quantity}</span>
        <span className="inc" onClick={inc}>
          Increase
        </span>
        <p>{price * quantity}</p>
        <span onClick={rem}>X</span>
      </div>
    </div>
  );
};

export default CheckoutItem;

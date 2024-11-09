import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <>
      <h1>{totalPrice}</h1>
      {cartItems.map((item) => (
        <CheckoutItem item={item} key={item.id} />
      ))}
    </>
  );
};

export default Checkout;

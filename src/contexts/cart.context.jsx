import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  incrementCount: () => {},
  decrementCount: () => {},
  removeFromCart: () => {},
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
    setTotalPrice((prev) => prev + productToAdd.price);
  };

  const incrementCount = (id) => {
    const selectedItem = cartItems.find((item) => item.id === id);
    const incAr = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setTotalPrice((prev) => prev + selectedItem.price);
    setCartItems(incAr);
  };

  const decrementCount = (id) => {
    const selectedItem = cartItems.find((item) => item.id === id);

    if (selectedItem.quantity === 1) {
      removeFromCart(id);
      return;
    }

    const decAr = cartItems.map((item) => {
      return item.id === id ? { ...item, quantity: item.quantity - 1 } : item;
    });
    setTotalPrice((prev) => prev - selectedItem.price);
    setCartItems(decAr);
  };

  const removeFromCart = (id) => {
    const selectedItem = cartItems.find((item) => item.id === id);
    setTotalPrice((prev) => prev - selectedItem.price * selectedItem.quantity);
    const FilteredArray = cartItems.filter((item) => !(item.id === id));
    setCartItems(FilteredArray);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    incrementCount,
    decrementCount,
    removeFromCart,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

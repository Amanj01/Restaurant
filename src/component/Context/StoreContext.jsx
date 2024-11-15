import { createContext, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  /* cartItems[itemid] wata objecty cartitems u valuy property itemId
  baw naw3a access valu dakay la propertyaki object */
/* This line checks if cartItems[3] is undefined or (falsey). In JavaScript,
 properties that do not exist on an object are undefined. */


  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const totalItems = () => {
    return Object.values(cartItems).some(count => count > 0);
  };

  // New function to calculate the total price
  const totalPrice = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const item = food_list.find((item) => item._id === itemId);
      if (item) {
        total += item.price * cartItems[itemId];
      }
    }
    return total;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    totalItems,
    totalPrice 
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

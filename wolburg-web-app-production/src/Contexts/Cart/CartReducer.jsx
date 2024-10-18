//Import the Action types
import {
  REMOVE_ITEM,
  ADD_TO_CART,
  INCREASE,
  DECREASE,
  CHECKOUT,
  CLEAR,
  REFRESH,
} from "./CartTypes.js";

const Storage = (cartItems) => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

// Export function to calculate the total price of the cart and the total quantity of the cart
export const sumItems = (cartItems) => {
  Storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

// The reducer is listening for an action, which is the type that we defined in the CartTypes.js file
const CartReducer = (state, action) => {
  // The switch statement is checking the type of action that is being passed in
  switch (action.type) {
    // If the action type is ADD_TO_CART, we want to add the item to the cartItems array
    case ADD_TO_CART:
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        const cartItem = JSON.parse(localStorage.getItem("cartItems"));
        if (cartItem)
          cartItem.push({
            ...action.payload,
            quantity: 1,
          });
        localStorage.setItem("cartItems", JSON.stringify(cartItem));
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    // If the action type is REMOVE_ITEM, we want to remove the item from the cartItems array
    case REMOVE_ITEM:
      let cartItem = JSON.parse(localStorage.getItem("cartItems"));
      cartItem = cartItem.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cartItems", JSON.stringify(cartItem));
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };

    // If the action type is REMOVE_ITEM, we want to remove the item from the cartItems array
    case REFRESH:
      let cartItemRefresh = JSON.parse(localStorage.getItem("cartItems"));
      cartItemRefresh = cartItemRefresh.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cartItems", JSON.stringify(cartItemRefresh));
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };

    // If the action type is INCREASE, we want to increase the quantity of the particular item in the cartItems array
    case INCREASE:
      let cartItems = JSON.parse(localStorage.getItem("cartItems"));
      const index = cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartItems[index].quantity < 1) {
        cartItems[index].quantity = 1;
      } else {
        cartItems[index].quantity++;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...cartItems],
      };

    // If the action type is DECREASE, we want to decrease the quantity of the particular item in the cartItems array
    case DECREASE:
      let cartItemsDecrease = JSON.parse(localStorage.getItem("cartItems"));
      const indexx = cartItemsDecrease.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartItemsDecrease[indexx].quantity > 1) {
        cartItemsDecrease[indexx].quantity--;
        localStorage.setItem("cartItems", JSON.stringify(cartItemsDecrease));
      } else {
        cartItemsDecrease[indexx].quantity = 1;
        localStorage.setItem("cartItems", JSON.stringify(cartItemsDecrease));
      }
      return {
        ...state,
        ...sumItems(state.cartItemsDecrease),
        cartItemsDecrease: [...cartItemsDecrease],
      };

    // If the action type is CHECKOUT, we want to clear the cartItems array and set the checkout to true
    case CHECKOUT:
      localStorage.setItem("cartItems", JSON.stringify([]));
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };

    //If the action type is CLEAR, we want to clear the cartItems array
    case CLEAR:
      localStorage.setItem("cartItems", JSON.stringify([]));
      return {
        cartItems: [],
        ...sumItems([]),
      };

    //Return the state if the action type is not found
    default:
      return state;
  }
};

export default CartReducer;

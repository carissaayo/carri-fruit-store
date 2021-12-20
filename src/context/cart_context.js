import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import reducer from "../reducers/cart_reducer";
const CartContext = createContext();

const getLocalStorage= ()=>{
  let cart = localStorage.getItem('cart');
  if(cart){
    return JSON.parse(localStorage.getItem("cart"))
  }
  else{
    return []
  }
}
const initialState = {
  cart:getLocalStorage(),
  total: 0,
  amount: 0,
};

const CartProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
  const [qty, setQty] = useState(1);

    const addToCart = async (id) => {

      dispatch({ type: "CART_LOADING" });
     const response = await axios.get(
       `https://carri-store-api.herokuapp.com/api/produces/${id}`
     );
     const produce = await response.data.produce; 
     dispatch({ type: "ADD_TO_CART", payload: produce  });
 
      localStorage.setItem("cart",state.cart)
    };
    const removeFromCart = (id) => {
      dispatch({ type: "REMOVE_FROM_CART", payload: id });
      // dispatch({ type: "UPDATE_CART" });
    };
    const clearCart =()=>{
      dispatch({type:'CLEAR_CART'})
    }

    const increaseQuantity = (id) => {
      dispatch({ type: "INCREASE_QUANTITY", payload: id });
    };
    const decreaseQuantity = (id) => {
      dispatch({ type: "DECREASE_QUANTITY", payload: id });
    };
 useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(state.cart))
 },[state.cart])
  
    return (
      <CartContext.Provider
        value={{
          ...state,
          addToCart,
          removeFromCart,
          clearCart,
          decreaseQuantity,
          increaseQuantity,
          qty,
          setQty,
        }}
      >
        {children}
      </CartContext.Provider>
    );
}


export const useCartContext = ()=>{
        return useContext(CartContext)
}

export {CartContext,CartProvider};
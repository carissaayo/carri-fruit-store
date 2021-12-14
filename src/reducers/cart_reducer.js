const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const item = action.payload;
    const { _id: itemId } = item;
    let newCart;
    const checkItem = state.cart.find((cartItem) => {
      const { _id: id } = cartItem;
      return id === itemId;
    });
    if (checkItem) {
      return { ...state };
    } else {
      newCart = [...state.cart, item];
      return { ...state, cart: newCart };
    }
  } else if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => {
        const { _id: id } = cartItem;
        return id !== action.payload;
      }),
    };
  } else if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  } else if (action.type === "DECREASE_QUANTITY") {
    
    let id = action.payload;
    const tempCart = state.cart.map((item) => {
      const { _id: itemId } = item;
      let newQty = item.qty;
      if (itemId === id) {
        if(item.qty <=1){
          return item
        }
        newQty  = newQty -1

        return { ...item, qty: newQty };
      }
      return item;
    });
    return {
      ...state,
      cart:tempCart,  
    };
  } else if (action.type === "INCREASE_QUANTITY") {
    let id = action.payload;
    const tempCart = state.cart.map((item)=>{
      const {_id:itemId} =item
      if(itemId === id){
        let newQty = item.qty +1
        return {...item,qty:newQty}
      }
      return item
    });
    
    return {
      ...state,
      cart: tempCart,
      single_product_loading: false,
    };
  } else if (action.type === "UPDATE_CART") {
    const tempTotal = state.cart.reduce((qty, item) => {
      return Number(item.itemQty) + qty;
    }, 0);
    const tempAmount = state.cart.reduce((totalPrice, cartItem) => {
      const { price, itemQty } = cartItem;
      return Number(price * itemQty) + totalPrice;
    }, 0);
    return { ...state, total: tempTotal, amount: tempAmount };
  }

  return state;
};

export default cartReducer;

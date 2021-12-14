const productReducer = (state,action)=>{
  
    if (action.type === "ADD_TO_FAVORITE") {
      const item = action.payload;
      let newList;
      newList = [...state.favoriteList, item];
      console.log(newList);
      return { ...state, favoriteList: newList };
    } else if (action.type === "REMOVE_FROM_FAVORITE") {
      const id = action.payload;
      console.log(id);
      let newList;
      newList = state.favoriteList.filter((favorite)=>favorite.id !== id);
      console.log(newList);

      return { ...state, favoriteList: newList };
    }  else if (action.type === "LOADING") {
      return { ...state, loading: true };
    } else if (action.type === "SINGLE_PRODUCT_LOADING") {
      return { ...state, single_product_loading: true };
    } else if (action.type === "DISPLAY_ITEMS") {
      return { ...state, products: action.payload, loading: false };
    } else if (action.type === "GET_SINGLE_PRODUCT_REQUEST") {
      return {
        ...state,
        product: action.payload,
        single_product_loading: false,
      };
    } 

    return state;
}

export default productReducer
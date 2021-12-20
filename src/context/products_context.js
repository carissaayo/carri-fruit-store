import { createContext, useContext, useEffect ,useReducer,useState} from "react";
import axios from "axios";
import reducer from "../reducers/products_reducer"
const initialState = {
  loading: false,
  single_product_loading:false,
  products: [],
  cart: [],
  total: 0,
  amount: 0,
  product: {},
  favoriteList:[]
};
const ProductsContext = createContext();
const ProductsProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [filterValue,setFilterValue] = useState('all');
    const [state,dispatch] = useReducer(reducer,initialState)
  const fecthProducts = async () => {
   try {
     dispatch({ type: "LOADING" });
     const response = await axios.get("https://carri-store-api.herokuapp.com/api/produces");
     const products = await response.data.produces;
     dispatch({ type: "DISPLAY_ITEMS", payload: products });
     localStorage.setItem("products", JSON.stringify(products));
   } catch (error) {
     console.log(error);
   }
  };
   const fetchSingleProduct = async (id) => {
     try {
       dispatch({ type: "SINGLE_PRODUCT_LOADING" });
       const response = await axios.get(
         `https://carri-store-api.herokuapp.com/api/produces/${id}`
       );
      
       const product = await response.data.produce;
       dispatch({ type: "GET_SINGLE_PRODUCT_REQUEST", payload: product });
     } catch (error) {
       console.error(error);
     }
   };

   const addToFavorite =  (product) => {
     try {
       dispatch({ type: "ADD_TO_FAVORITE", payload: { product } });
    localStorage.setItem("favoriteList", JSON.stringify(state.favoriteList));

     } catch (error) {
       console.error(error);
     }
   };
   const removeFromFavorite =  (id) => {
     try {
       dispatch({ type: "REMOVE_FROM_FAVORITE", payload: { id } });
     } catch (error) {
       console.error(error);
     }
   };

  const handleSearch = async()=>{
       try {
         if (  filterValue=== "all" ) {
           const response = await axios.get(
             `https://carri-store-api.herokuapp.com/api/produces/?name=${searchValue}`
           );
           const products = await response.data.produces;
           dispatch({ type: "DISPLAY_ITEMS", payload: products });
           localStorage.setItem("products", JSON.stringify(products));
         } else {
           const response = await axios.get(
             `https://carri-store-api.herokuapp.com/api/produces/?isFruit=${filterValue}&name=${searchValue}`
           );
           const products = await response.data.produces;
           dispatch({ type: "DISPLAY_ITEMS", payload: products });
           localStorage.setItem("products", JSON.stringify(products));
           console.log(searchValue);
         }
       } catch (error) {
         console.log(error);
       }
  }

  useEffect(() => {
    fecthProducts();
  }, []);
  
  
 
  return (
    <ProductsContext.Provider
      value={{
        ...state,
        fetchSingleProduct,
        sideBar,
        setSideBar,
        addToFavorite,
        removeFromFavorite,
        favorite,
        setFavorite,
        searchValue,
        setSearchValue,
        filterValue,
        setFilterValue,
        handleSearch
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsContext, ProductsProvider };

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "tailwindcss/tailwind.css";

// Components
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
// Screens
import HomeScreen from "./screens/HomeScreen";
import ShopScreen from "./screens/ShopScreen";
import CartScreen from "./screens/CartScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import SearchScreen from "./screens/SearchScreen";
import ProductScreen from "./screens/ProductScreen";
// context
import { useProductsContext } from "./context/products_context";
function App() {
    const {loading} = useProductsContext();
    if (loading) {
      return (
        <div className="loading relative top-0 left-0 w-screen h-screen">
            <h1 className='absolute text-4xl font-bold top-96 left-44'>Loading ...</h1>
        </div>
      );
    }
  return (
    <div className="bg-gray-300 relative">

  {loading?
(<div className="loading relative top-0 left-0 w-screen h-screen">
            <h1 className='absolute text-4xl font-bold top-96 left-96'>Loading ...</h1>
        </div>):
      (<BrowserRouter forceRefresh={true}>
        <Header />
        <SideBar />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/favorite" element={<FavoriteScreen />} />
            <Route path="/shop" element={<ShopScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/produces/:id" element={<ProductScreen />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>)}
    </div>
  );
}

export default App;

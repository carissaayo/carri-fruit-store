import React from 'react'
import Product from "../components/Product";
import SearchBar from "../components/SearchBar";
import { useProductsContext } from "../context/products_context";
const FavoriteScreen = () => {
  const { favoriteList } = useProductsContext();
console.log(favoriteList);
if(favoriteList.length <=0 ){
return (
  <div>
    <p>You have not added any product to the favorite list yet</p>
  </div>
);
}
    return (
      <main>
        <SearchBar />
        <section className="max-w-7xl  grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-8 my-12   sm:mx-44 md:mx-24  justify-center  ">
          {favoriteList
            ? favoriteList.map((favorite) => {
                const { _id: id } = favorite;
                return <Product key={id} favorite={favorite} />;
              })
            : null}
        </section>
      </main>
    );
}

export default FavoriteScreen

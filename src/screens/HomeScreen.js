import Product from "../components/Product";
import SearchBar from "../components/SearchBar";
import "./Homescreen.css"
import { useProductsContext } from "../context/products_context";
const HomeScreen = () => {
  const { products, favorite, setFavorite } = useProductsContext();

  return (
    <main className="homescreen min-h-full">
      <SearchBar />
      <section className="max-w-7xl  grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-8 my-12   sm:mx-44 md:mx-24  justify-center ">
        {products
          ? products.map((product) => {
              const { _id: id } = product;
              return (
                <Product
                  key={id}
                  product={product}
                  favorite={favorite}
                  setFavorite={setFavorite}
                />
              );
            })
          : null}
      </section>
    </main>
  );
};
export default HomeScreen;

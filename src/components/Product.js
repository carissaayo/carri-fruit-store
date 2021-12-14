import { useState } from 'react';
import { Link } from 'react-router-dom';
import  "./Product.css";
import { useProductsContext } from '../context/products_context';
const Product = ({ product, favorite, setFavorite }) => {
  const { addToFavorite, removeFromFavorite } = useProductsContext();
  const { imageUrl, isFruit, name, price, rating, _id: id } = product;
  // const [favorite,setFavorite] = useState(false);

  // console.log(favorite);
  const handleFavorite = () => {
    if (!favorite) {
      setFavorite(true);
      addToFavorite(product);
    }
    if (favorite) {
      setFavorite(false);
      removeFromFavorite(id);
    }
    console.log(favorite);
  };

  return (
      <Link to={`/produces/${id}`}>
    <div className=" product bg-gray-100  h-auto pb-8 rounded-2xl shadow-2xl text-center flex-col justify-center items-center pt-10 relative w-96 sm:w-72 ">
        <div className="img-con mb-4 sm:px-6 px-12 ">
          <img
            src={imageUrl}
            alt="product"
            className="md:w-60 md:h-48 w-72  h-60"
          />
        </div>
        <div className="text-green-800 font-bold capitalize text-center text-xl">
          <p className="">{name}</p>
           <p className=''> {isFruit  ? 'Fruit':'Vegetable'}</p>
        </div>
          <p className="text-2xl text-green-700 font-bold"> ${price}</p>
    </div>
      </Link>
  );
};

export default Product

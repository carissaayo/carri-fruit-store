import { useEffect,useState } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
import "./ProductScreen.css";
const ProductScreen = ({}) => {
  const [qty,setQty]  = useState(1)
    const {id} = useParams()
    const { fetchSingleProduct,product,single_product_loading:loading} = useProductsContext();
    const {addToCart} = useCartContext();
    let navigate = useNavigate()
    useEffect(()=>{
        fetchSingleProduct(id);
    },[id]);
    const increase = () => {
      setQty(qty + 1);
  
    }; 
    const decrease = () => {
      if (qty <= 0) return;
      setQty(qty - 1);
    };
  const { imageUrl,  name, price, rating,calorie} = product;
 ;
    return (
      <>
        {loading ? (
          <div className="loading relative top-0 left-0 w-screen h-screen">
            <h1 className="absolute text-4xl font-bold top-96 left-44">
              Loading ...
            </h1>
          </div>
        ) : (
          <main className="productscreen sm:px-12 md:px-24 lg:grid   grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 m-24  gap-x-20 lg:gap-x-30 relative sm:mx-36 pt-2">
            <Link className="absolute -left-20 -top-16 mb-12" to="/">
              <button className=" w-40 h-16 text-xl text-white bg-green-500 rounded-2xl">
                <i className="fa fa-back"></i>
                Back
              </button>
            </Link>
            <div className=" img-con my-12 mt-20">
              <img src={imageUrl} alt={name} className=" w-92 sm:w-80  product_image" />
            </div>

            <section className="info-con sm:w-80 my-12 lg:mt-32">
              <p className="name text-4xl font-bold">Capsicum</p>
              <div className="flex justify-between my-8 font-bold w-40 ">
                <div className="flex">
                  <span>
                    <i className="fa fa-star text-yellow-300"></i>
                  </span>
                  <p className="rate ml-2">{rating}</p>
                </div>
                <div className="flex">
                  <span>
                    <i className="fa fa-fire text-yellow-300"></i>
                  </span>
                  <p className="calorie ml-2">{calorie} Cal</p>
                </div>
              </div>
              <div className=" text-con sm:flex justify-between items-center font-bold ">
                <div className="mx-8 sm:mx-0 ">
                  <h3 className="text-lg "> Price : ${price}</h3>
                </div>
                <button
                  className="bg-green-500 w-44 text-white rounded-2xl text-xl h-12"
                  onClick={() => {
                    addToCart(id);
                    navigate("/cart", { replace: true });
                  }}
                >
                  <span>
                    <i className="fa fa-cart"></i>
                  </span>
                  Add To Cart
                </button>
              </div>
            </section>
          </main>
        )}
      </>
    );
}

export default ProductScreen

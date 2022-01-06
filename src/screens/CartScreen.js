import { Link,useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useCartContext } from '../context/cart_context';
import "./CartScreen.css"
const CartScreen = () => {
const { cart, clearCart, total } = useCartContext();
    let navigate = useNavigate();

if(cart.length < 1){
  return (
    <div className="empty-cart ">
      <div className="relative text-center top-36 font-bold text-2xl">
        <h3>Your Cart is currently empty</h3>
        <p>
          Go back to{" "}
          <Link className="text-green-400" to="/">
            Shop
          </Link>
        </p>
      </div>
    </div>
  );
}
    return (
      <div>
          <section className=' cart-items-con m-auto'>{cart?
           cart.map((cartItem,index)=>{
            const {_id:id}=cartItem
              return (
                      <CartItem cartItem={cartItem} key={index} />
              );
            }):null}
          
          </section>
        <section className="sm:m-24 sm:mx-28">
          <div className="flex flex-col md:flex-row lg:px-40 md:justify-center items-center  border-t-2 border-b-2 py-16 text-white text-xl ">
            <Link to='/'>
                <button className="rounded-2xl bg-green-300 w-72 h-20 mb-12 md:mb-0 sm:ml-0 sm:mr-12">
                Continue Shopping
                </button>
            </Link>
                <button className="rounded-2xl bg-indigo-400 sm:w-96 w-72 h-20"
                onClick={clearCart}
                >
                Clear Shopping Cart
                </button>

          </div>
          <div className=" text-center py-12  md:mx-32 ">
            <p className="font-bold md:text-3xl text-2xl mb-8">
              Total : <span className="lg:ml-40 md:ml-20 sm:ml-12">${total}</span>
            </p>
          </div>
          <div className=" text-center py-12 border-b-2 border-t-2">
            <button className="bg-green-300 w-72 h-20 text-white rounded-2xl">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </section>
  
      </div>
    );
}

export default CartScreen

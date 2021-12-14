import { useCartContext } from '../context/cart_context';
const CartItem = ({cartItem}) => {
  const { imageUrl, isFruit, name, price, _id: id,qty } = cartItem;
  const { removeFromCart,  increaseQuantity, decreaseQuantity } =
    useCartContext();

    return (
      <div className="cart-item flex justify-between items-center  m-8   md:m-24 md:mx-    max-w-5xl bg-gray-100 h-54   sm:p-8 p-4 rounded-2xl">
        <img
          src={imageUrl}
          alt="cart item"
          className="md:w-44 sm:w-32 md:w-20 md:h-36 h-24"
        />
       
          <p className="font-bold">{name}</p>
          <p>Type: {isFruit ? "Fruit" : "Vegetable"}</p>
          <p>${price}</p>
     
        <p className="mr-2">
          <span onClick={() => decreaseQuantity(id)}>
            <i className="fa fa-minus mr-2 cursor-pointer"></i>
          </span>
          {qty}
          <span onClick={() => increaseQuantity(id)}>
            <i className="fa fa-plus ml-2 cursor-pointer"></i>
          </span>
        </p>
        <button onClick={() => removeFromCart(id)}>
          <i className="fa fa-trash cursor-pointer"></i>
        </button>
      </div>
    );
}

export default CartItem

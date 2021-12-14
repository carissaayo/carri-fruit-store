import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="navbar__links hidden md:flex justify-between items-center text-2xl text-green-400">
      <li className="pr-4">
        <Link to="/"> Shop</Link>
      </li>
      <li className="pr-4">
        <Link to="/cart" className="cart__link">
          <i className="fa fa-shopping-cart  mr-2" aria-hidden="true"></i>
          <span>
            Cart
          </span>
        </Link>
      </li>
      <li className="pr-4">
        <Link to="/account">
          <i className="fa fa-user-circle  mr-2" aria-hidden="true"></i>
          <span>Account</span>
        </Link>
      </li>
      <li className="pr-4">
        <Link to="/favorite">
          <i className="fa fa-heart mr-2" aria-hidden="true"></i>
          <span>Favorite</span>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;

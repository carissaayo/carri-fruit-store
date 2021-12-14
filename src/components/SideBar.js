import { useState } from "react";
import { Link } from "react-router-dom";
import './SideBar.css';
import { useProductsContext } from "../context/products_context";
const SideBar = () => {
  const {sideBar, setSideBar} = useProductsContext()
    return (
      <>
        <div
          className={sideBar ? "overlay display-overlay" : "overlay"}
          onClick={() => setSideBar(false)}
        ></div>
        <div className={sideBar ? "sidebar show " : "sidebar"}>
          <div className="sidebar__close-btn cursor-pointer" onClick={() => setSideBar(false)}>
            <i className="fa fa-close fa-2x " aria-hidden="true"></i>
          </div>
          <ul className="sidebar__links">
            <li>
              <Link to="/"> Shop</Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <span>
                  Cart
                  <span className="sidebar__cartbadge">0</span>
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
        </div>
      </>
    );
}

export default SideBar

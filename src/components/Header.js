import Navbar from './Navbar';
import { useProductsContext } from '../context/products_context';
const Header = () => {
  const {sideBar, setSideBar} = useProductsContext()
    return (
      <div className="flex justify-between items-center py-8 px-8 sm:px-16  bg-indigo-200 h-28 w-full">
        <div className="logo-con">
          <h1 className="font-bold text-green-800 text-3xl">CariStore</h1>
        </div>
        <div onClick={()=>setSideBar(true)} className="md:hidden cursor-pointer">
          <i className="fa fa-bars fa-2x"></i>
        </div>
        <Navbar />
      </div>
    );
}

export default Header

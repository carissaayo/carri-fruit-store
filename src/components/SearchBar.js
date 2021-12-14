import { useEffect } from "react"; 
import "./SearchBar.css"
import { useProductsContext } from '../context/products_context';
const SearchBar = () => {
const {
  searchValue,
  setSearchValue,
  filterValue,
  setFilterValue,
  handleSearch
} = useProductsContext();

useEffect(() => {
  handleSearch(searchValue,filterValue);
}, [searchValue,filterValue]);
    return (
      <section className="search-bar flex flex-col lg:flex-row justify-start  lg:justify-around my-8 items-center ">
        <div className="mb-8 lg:mb-0 ">
          <input 
          onChange={(e)=>setSearchValue(e.target.value)}
            value={searchValue}
            autoFocus={true}
            className="sm:w-96 w-56 h-10 p-4 text-lg outline-none rounded-l-lg"
            type="text"
            placeholder="search fruits ..."
          />
          <button
            className="bg-yellow-400 text-white h-10 sm:w-24 w-20  sm:text-lg uppercase rounded-r-lg"
            type="button"
          >
            Search
          </button>
        </div>
        <div className="filter-con text-lg  ">
          <label htmlFor="product_filter" className="font-bold">
            Filter Type :
          </label>
          <select
            id="product_filter"
            className="ml-8 h-10 cursor-pointer outline-none rounded-lg"
            value={filterValue}
            onChange={(e)=>setFilterValue(e.target.value)}
         >
            <option value="all">All</option>
            <option value="true">Fruits</option>
            <option value="false">Vegetables</option>
          </select>
        </div>
      </section>
    );
}

export default SearchBar

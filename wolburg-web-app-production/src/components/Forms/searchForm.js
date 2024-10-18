import { FaSearch } from 'react-icons/fa';
const SearchInput = () => {
  return (
    <>
      <form>
        <div className="flex ">
          <div className="relative w-full">
            <input
              type="search"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full !outline-none"
              placeholder="Search... "
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm text-white bg-primary-green rounded-full "
            >
                <FaSearch />
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchInput;

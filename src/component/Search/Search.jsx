import React, { useState, useEffect, useRef } from 'react';
import { food_list } from '../../assets/assets';
import './Search.css';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    setShowForm(true);
  };

  const filteredFoods = food_list.filter((food) =>
    food.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="search-container relative">
      <div className="relative">
        <input
          type="search"
          name="search"
          className="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearch}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 absolute top-3 right-3 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          ></path>
        </svg>
      </div>

      {showForm && filteredFoods.length > 0 && (
        <div
          className="bg-gray-100 p-3 rounded-lg shadow-md absolute top-full left-0 mt-2 z-10"
          ref={formRef}
        >
          {filteredFoods.map((food) => (
            <form key={food._id} className="mb-4">
              <div className="bg-white p-4 rounded-md hover:bg-gray-200 transition-colors duration-300">
                <li><a href="#explore-menu">{food.name}</a></li>
                {/* Add more form fields as needed */}
              </div>
            </form>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;

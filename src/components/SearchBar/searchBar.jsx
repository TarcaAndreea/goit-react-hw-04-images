import React, { useState } from 'react';
import '../SearchBar/searchBar-module.css';
import { FaSearch } from 'react-icons/fa';

const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
          <FaSearch />
        </button>
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;

import React, { useState } from 'react';
import './Header.css';
 
const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
 
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
 
  return (
    <header className="header">
      <div className="logo">Art Inventory</div>
 
      <div className="search-bar">

        <div className="input-group">
          <label htmlFor="search">Search</label>
          <input
            type="text"
            id="search"
            placeholder="Search by title, artist..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
 
        <div className="input-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="all">All</option>
            <option value="artworks">Artworks</option>
            <option value="artists">Artists</option>
            <option value="galleries">Galleries</option>
            <option value="exhibitions">Exhibitions</option>
            <option value="contacts">Contacts</option>
          </select>
        </div>
 
        <button className="search-button" onClick={handleSubmit}>
          Search
        </button>
 
      </div>
    </header>
  );
};
 
export default Header;
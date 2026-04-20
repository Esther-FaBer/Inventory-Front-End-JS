import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import './Header.css';
 
const Header = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const { setSearch } = useSearch();

  const handleSubmit = (e) => {
      e.preventDefault();
      setSearch(query, category);
    };
  

 return (
    <header className="header">

      <div className="header__left">
        <span className="header__logo">Art Inventory</span>

        <nav className="header__nav">
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive ? 'header__nav-link active' : 'header__nav-link'
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      <form className="header__search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search artworks, artists..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Category"
        >
          {CATEGORIES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <button type="submit">Search</button>
      </form>

      <div className="header__right">
        <NavLink to="/add" className="header__add-btn">
          + Add
        </NavLink>
        <div className="header__avatar">AI</div>
      </div>

    </header>
  );
};

export default Header;
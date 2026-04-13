import React, { useState } from 'react';
import './Header.css';

const Header = () => {

    const [searchQuery, setSearchQuery] = useSate('');
    const [category, setCategory] = useState('all');

    //search box
    const handleSearch = (e) = {
        setSearchQuery(e.target.value);
    };

    return (
        <header className='header'>
            <div clasName='logo'>Art Inventory</div>

            <div className='search-bar'></div>

            </header>

    );

};

export default Header;
import React from 'react';
import './SearchBar.scss'; // Import the CSS file

const SearchBar: React.FC = () => {
    return (
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search..." />
            <button className="search-button">
                <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M10 2a8 8 0 105.293 14.293l5.707 5.707-1.414 1.414-5.707-5.707A8 8 0 1010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
                </svg>
            </button>
        </div>
    );
};

export default SearchBar;

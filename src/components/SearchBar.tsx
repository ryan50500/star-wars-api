import React from 'react';
import styles from '../styles/SearchBar.module.css';

interface SearchInterface {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
}

const SearchBar = ({ setSearchTerm, searchTerm }: SearchInterface) => {
    // Event handler for input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Update the searchTerm when input value changes
        setSearchTerm(e.target.value);
    };

    return (
        <div className={styles.search__bar}>
            <label htmlFor="searchInput">Search for films, vehicles, or starships!</label>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Enter search term"
                id="searchInput"
                name="search"
            />
        </div>
    );
};

export default SearchBar;

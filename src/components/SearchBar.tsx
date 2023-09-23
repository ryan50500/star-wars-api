import React from 'react';
import styles from '../styles/SearchBar.module.css'

interface IsearchInterface {
    searchTerm: string,
    setSearchTerm: (searchTerm: string) => void;
}

const SearchBar = ({ setSearchTerm, searchTerm }: IsearchInterface) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className={styles.search__bar}>
            <label htmlFor="searchInput">Search for films, vehicles or starships!</label>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Enter search term "
                id="searchInput"
                name="search"
            />
        </div>
    );
};

export default SearchBar;

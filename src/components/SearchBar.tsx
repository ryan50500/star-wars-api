import React from 'react';

interface IsearchInterface {
    searchTerm: string,
    setSearchTerm: (searchTerm: string) => void;
}

const SearchBar = ({ setSearchTerm, searchTerm }: IsearchInterface) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Enter search term "
            />
        </div>
    );
};

export default SearchBar;

import React from 'react';
import styles from '../styles/Sorting.module.css';

interface SortingInterface {
    matchedKeyword: string;
    data: Array<any>;
    setSorting: React.Dispatch<React.SetStateAction<boolean>>;
    setSortedResults: React.Dispatch<React.SetStateAction<any[]>>;
}

const Sorting = ({ matchedKeyword, data, setSorting, setSortedResults }: SortingInterface) => {
    // Function to sort data based on 'name' or 'title' property
    const sortOrder = () => {
        // Determine whether to sort by 'name' or 'title' based on the keyword
        const sortByProperty = matchedKeyword.includes('starships') || matchedKeyword.includes('vehicles') ? 'name' : 'title';

        // Create a sorted copy of the data
        const sortedData = [...data].sort((a, b) => a[sortByProperty].localeCompare(b[sortByProperty]));

        // Update state with the sorted data and set sorting to true
        setSortedResults(sortedData);
        setSorting(true);
    };

    return (
        <div className={styles.sort__wrapper}>
            {/* Display the matchedKeyword as a title */}
            {<h1 style={{ margin: '0 30px 0 50px' }}>{matchedKeyword}</h1>}

            {matchedKeyword && (
                // Button to trigger sorting based on the keyword
                <button onClick={sortOrder} className={styles.sort__button}>
                    {matchedKeyword.includes('starships') || matchedKeyword.includes('vehicles')
                        ? 'Sort by name'
                        : 'Sort by title'}
                </button>
            )}
        </div>
    );
};

export default Sorting;

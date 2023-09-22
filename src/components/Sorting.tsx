import React from 'react';
import styles from '../styles/Sorting.module.css';

interface SortingInterface {
    matchedKeyword: string,
    data: Array<any>;
    setSorting: React.Dispatch<React.SetStateAction<boolean>>;
    setSortedResults: React.Dispatch<React.SetStateAction<any[]>>;
}

const Sorting = ({ matchedKeyword, data, setSorting, setSortedResults }: SortingInterface) => {
    const sortOrder = () => {
        const sortByProperty = matchedKeyword.includes('starships') || matchedKeyword.includes('vehicles') ? 'name' : 'title';

        const sortedData = [...data].sort((a, b) => a[sortByProperty].localeCompare(b[sortByProperty]));

        setSortedResults(sortedData);
        setSorting(true);
    };

    return (
        <div> {/* Use the grid container style */}
            <button onClick={sortOrder} className={styles.sort__buton}>
                {matchedKeyword.includes('starships') || matchedKeyword.includes('vehicles') ? 'Sort by name' : 'Sort by title'}
            </button>
        </div>
    );
};

export default Sorting;

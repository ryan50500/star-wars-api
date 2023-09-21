import React from 'react';

interface ISortingInterface {
    matchedKeyword: string;
    data: Array<any>;
    setSorting: React.Dispatch<React.SetStateAction<boolean>>;
    setSortedResults: React.Dispatch<React.SetStateAction<any[]>>;
}

const Sorting = ({ matchedKeyword, data, setSorting, setSortedResults }: ISortingInterface) => {
    const sortOrder = () => {
        let sortByProperty: string;

        if (matchedKeyword.includes('starships') || matchedKeyword.includes('vehicles')) {
            sortByProperty = 'name';
        } else if (matchedKeyword.includes('films')) {
            sortByProperty = 'title';
        }

        const sortedData = [...data].sort((a, b) => a[sortByProperty].localeCompare(b[sortByProperty]));

        setSortedResults(sortedData);
        setSorting(true);
    };

    return (
        <div>
            <button onClick={sortOrder}>
                {matchedKeyword.includes('starships') || matchedKeyword.includes('vehicles') ? 'sort by name' : 'sort by title'}
            </button>
        </div>
    );
};

export default Sorting;

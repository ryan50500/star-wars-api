import { useState } from 'react';

export const useSortByTitle = (initialData) => {
    const [sortedData, setSortedData] = useState(initialData);
    const [sorting, setSorting] = useState(false);

    const sortByTitle = (dataToSort) => {
        const sortedData = [...dataToSort].sort((a, b) => {
            return a.title.localeCompare(b.title);
        });

        setSortedData(sortedData);
        setSorting(true);
    };

    return { sortedData, sorting, sortByTitle };
};
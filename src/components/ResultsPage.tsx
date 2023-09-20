import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Starships from './Starships';
import Films from './Films';
import Vehicles from './Vehicles';

interface ResultsPageProps {
    searchTerm: string;
}

const ResultsPage = ({ searchTerm }: ResultsPageProps) => {
    const keywords = ['starships', 'films', 'vehicles'];

    // Check if the entered search term includes any of the keywords
    const matchedKeyword = keywords.find(keyword => keyword.includes(searchTerm));

    // Fetch data based on 'matchedKeyword' and refetch when it changes
    const { data, isLoading, error } = useQuery(['products', matchedKeyword], async () => {
        if (!matchedKeyword) return [];
        const response = await fetch(`https://swapi.dev/api/${matchedKeyword}/`);
        return response.json();
    });

    const [sortedResults, setSortedResults] = useState<any[]>([]);
    const [sorting, setSorting] = useState(false);

    if (isLoading) return <div>Loading...</div>;

    if (error instanceof Error) return <div>Error: {error.message}</div>;

    // Function to sort data by title
    const sortByTitle = () => {
        if (data?.results && data.results.length > 0) {
            // Create a copy of data.results to avoid mutating the original array
            const sortedData = [...data.results].sort((a, b) => {
                return a.title.localeCompare(b.title);
            });

            // Set the sorted data in state
            setSortedResults(sortedData);
            setSorting(true);
        }
    };

    return (
        <>
            {matchedKeyword && <h2>{matchedKeyword}:</h2>}
            {matchedKeyword && (
                <>
                    {matchedKeyword.includes('starships') && (
                        <Starships data={sorting ? sortedResults : data.results} />
                    )}
                    {matchedKeyword.includes('films') && (
                        <Films data={sorting ? sortedResults : data.results} sortByTitle={sortByTitle} />
                    )}
                    {matchedKeyword.includes('vehicles') && (
                        <Vehicles data={sorting ? sortedResults : data.results} />
                    )}
                </>
            )}
            {!matchedKeyword && <h2>Please search for Films, Starships, or Vehicles</h2>}
        </>
    );
};

export default ResultsPage;

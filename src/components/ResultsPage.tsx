import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Starships from './Starships';
import Films from './Films';
import Vehicles from './Vehicles';
import Sorting from './Sorting';

interface ResultsPageProps {
    searchTerm: string;
}

const ResultsPage = ({ searchTerm }: ResultsPageProps) => {

    // Sorting of fetched results
    const [sortedResults, setSortedResults] = useState<any[]>([]);
    const [sorting, setSorting] = useState(false);


    // Fetch data using React Query
    const keywords = ['starships', 'films', 'vehicles'];
    // Check if any of the keywords includes the search term
    const matchedKeyword = keywords.find(keyword => keyword.includes(searchTerm)) || '';
    // Enable users to perform partial searches for retrieval from the API"
    const { data, isLoading, error } = useQuery(['products', matchedKeyword], async () => {
        // we need to set sorting to false so 'data.results' is passed to the components initially
        setSorting(false)
        console.log('we need this to re-render')
        if (!matchedKeyword) return [];
        const response = await fetch(`https://swapi.dev/api/${matchedKeyword}/`);
        return response.json();
    });


    if (isLoading) return <div>Loading...</div>;

    if (error instanceof Error) return <div>Error: {error.message}</div>;


    return (
        <>
            {matchedKeyword && <h2>{matchedKeyword}:</h2>}

            <Sorting {...{ matchedKeyword, data: data.results, setSortedResults, setSorting }} />

            {matchedKeyword && (
                <>
                    {matchedKeyword.includes('starships') && <Starships data={sorting ? sortedResults : data.results} />}
                    {matchedKeyword.includes('films') && <Films data={sorting ? sortedResults : data.results} />}
                    {matchedKeyword.includes('vehicles') && <Vehicles data={sorting ? sortedResults : data.results} />}
                </>
            )}
            {!matchedKeyword && <h2>Please search for Films, Starships, or Vehicles</h2>}
        </>
    );
};

export default ResultsPage;
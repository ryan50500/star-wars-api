import React, { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Starships from './Starships';
import Films from './Films';
import Vehicles from './Vehicles';
import Sorting from './Sorting';

interface ResultsPageProps {
    searchTerm: string;
}

const ResultsPage = ({ searchTerm }: ResultsPageProps) => {
    const queryClient = useQueryClient();

    // Sorting of fetched results
    const [sortedResults, setSortedResults] = useState<any[]>([]);
    const [sorting, setSorting] = useState(false);

    // Keywords for fetching specific data ('starships', 'films', 'vehicles')
    const keywords = ['films', 'starships', 'vehicles'];
    // Set matchedKeyword to the user search term.
    // Fallback value of empty string ensures 'matchedKeyword' is never undefined or null.
    const matchedKeyword = keywords.find(keyword => keyword.includes(searchTerm)) || '';
    console.log('adaasdsaa' + matchedKeyword)


    // Prefetch data on page load so user can search and retrieve data fast
    useEffect(() => {
        const prefetchData = async () => {
            for (const keyword of keywords) {
                const response = await fetch(`https://swapi.dev/api/${keyword}/`);
                const data = await response.json();
                const queryFn = () => data;
                queryClient.prefetchQuery(['products', keyword], queryFn);
            }
        };
        prefetchData();
    }, []);



    // Enable users to perform partial searches for retrieval from the API
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
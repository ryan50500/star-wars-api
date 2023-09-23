import React, { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Starships from './Starships';
import Films from './Films';
import Vehicles from './Vehicles';
import Sorting from './Sorting';
import Loading from './Loading';

interface ResultsPageProps {
    searchTerm: string;
}

const ResultsPage = ({ searchTerm }: ResultsPageProps) => {
    const queryClient = useQueryClient();

    // Sorting of fetched results
    const [sortedResults, setSortedResults] = useState<any[]>([]);
    const [sorting, setSorting] = useState(false);

    // Keywords for fetching specific data ('films', 'starships', 'vehicles')
    const keywords = ['films', 'starships', 'vehicles'];
    // Set matchedKeyword to the user search term.
    // Fallback value of empty string ensures 'matchedKeyword' is never undefined or null.
    const matchedKeyword = keywords.find(keyword => keyword.includes(searchTerm)) || '';

    // Prefetch data on page load so users can search and retrieve data quickly
    useEffect(() => {
        const prefetchData = async () => {
            for (const keyword of keywords) {
                try {
                    const response = await fetch(`https://swapi.dev/api/${keyword}/`);
                    const data = await response.json();
                    const queryFn = () => data;
                    // Prefetch data for future use
                    queryClient.prefetchQuery(['products', keyword], queryFn);
                } catch (error) {
                    // Handle any errors that occur during prefetching
                    console.error(error);
                }
            }
        };
        // Trigger prefetching when the component mounts
        prefetchData();
    }, []);


    // Enable users to perform partial searches for retrieval from the API
    const { data, isLoading, error } = useQuery(['products', matchedKeyword], async () => {
        // Set sorting to false so the data (without being sorted) is passed to the components initially
        setSorting(false)
        if (!matchedKeyword) return [];
        const response = await fetch(`https://swapi.dev/api/${matchedKeyword}/`);
        return response.json();
    });

    // Render loading component while data is being fetched
    if (isLoading) return <Loading />

    // Render an error message if there's an error with the API request
    if (error instanceof Error) return <div>Error: {error.message}</div>;

    return (
        <>
            {/* Render the Sorting component*/}
            <Sorting {...{ matchedKeyword, data: data.results, setSortedResults, setSorting }} />
            {/* Check if matchedKeyword is set */}
            {matchedKeyword && (
                <>
                    {/* Conditionally render components based on the matchedKeyword */}
                    {matchedKeyword.includes('starships') && <Starships data={sorting ? sortedResults : data.results} />}
                    {matchedKeyword.includes('films') && <Films data={sorting ? sortedResults : data.results} />}
                    {matchedKeyword.includes('vehicles') && <Vehicles data={sorting ? sortedResults : data.results} />}
                </>
            )}
            {/* Render a message if no valid matchedKeyword is found */}
            {!matchedKeyword &&
                <h2 style={{ marginTop: '0px', textAlign: 'center', color: 'red' }}>
                    Please search for films, starships, or vehicles
                 </h2>}
        </>
    );
};

export default ResultsPage;

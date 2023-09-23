import React, { useState, useEffect } from 'react';
import Starships from './Starships';
import Films from './Films';
import Vehicles from './Vehicles';
import Sorting from './Sorting';
import Loading from './Loading';
import { useDataFetching } from './useDataFetching'; // Import the custom hook

interface ResultsPageProps {
    searchTerm: string;
}

const ResultsPage = ({ searchTerm }: ResultsPageProps) => {

    const [sortedResults, setSortedResults] = useState<any[]>([]);
    const [sorting, setSorting] = useState(false);

    // Use the custom hook to fetch data and pass setSorting function
    const { data, isLoading, error, matchedKeyword } = useDataFetching(searchTerm, setSorting);

    // Render loading component while data is being fetched
    if (isLoading) return <Loading />;

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

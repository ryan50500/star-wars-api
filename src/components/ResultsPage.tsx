import React from 'react';
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

    if (isLoading) return <div>Loading...</div>;

    if (error instanceof Error) return <div>Error: {error.message}</div>;

    return (
        <>
            {matchedKeyword && <h2>{matchedKeyword}:</h2>}
            {matchedKeyword && (
                <>
                    {matchedKeyword.includes('starships') && <Starships data={data.results} />}
                    {matchedKeyword.includes('films') && <Films data={data.results} />}
                    {matchedKeyword.includes('vehicles') && <Vehicles data={data.results} />}
                </>
            )}
            {!matchedKeyword && <h2>Please search for Films, Starships or Vehicles</h2>}
        </>
    );
}

export default ResultsPage;

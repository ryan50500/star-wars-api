import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Starships from './Starships';
import Films from './Films';
import Vehicles from './Vehicles';

interface ResultsPageProps {
    searchTerm: string;
}

const ResultsPage = ({ searchTerm }: ResultsPageProps) => {

    const { data, isLoading, error } = useQuery(['products', searchTerm], async () => {

        const response = await fetch(`https://swapi.dev/api/${searchTerm}/`);
        return response.json();
    });


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error instanceof Error) {
        return <div>the error is: {error.message}</div>;
    }

    console.log(data.results);


    return (
        <>
            <h2>{searchTerm}:</h2>
            {/* Conditionally render the relevant component based on searchTerm */}
            {searchTerm === 'starships' && <Starships data={data.results} />}
            {searchTerm === 'films' && <Films data={data.results} />}
            {searchTerm === 'vehicles' && <Vehicles data={data.results} />}
        </>
    );
}

export default ResultsPage

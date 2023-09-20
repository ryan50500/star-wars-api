import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Starships from './Starships';
import Films from './Films';
import Vehicles from './Vehicles';

const ResultsPage = () => {
    const [searchTerm, setSearchTerm] = useState('vehicles');

    const { data, isLoading, isError, error } = useQuery('products', async () => {
        const response = await fetch(`https://swapi.dev/api/${searchTerm}/`);
        return response.json();
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError && error instanceof Error) {
        return <div>Error: {error.message}</div>;
    }
    console.log(data.results);

    return (
        <>
            {/* Conditionally render the relevant component based on searchTerm */}
            {searchTerm === 'starships' && <Starships data={data.results} />}
            {searchTerm === 'films' && <Films data={data.results} />}
            {searchTerm === 'vehicles' && <Vehicles data={data.results} />}
        </>
    );

}

export default ResultsPage

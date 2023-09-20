
import React from 'react';

interface StarshipData {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
}

interface StarshipsProps {
    data: StarshipData[];
    sortByName: () => void;
}

const Starships: React.FC<StarshipsProps> = ({ data, sortByName }) => (
    <>
        <button onClick={sortByName}>Sort by Name</button>
        {data.map((starship, index) => (
            <div key={index}>
                <h2>Name: {starship.name}</h2>
                <h2>Model: {starship.model}</h2>
                <h2>Manufacturer: {starship.manufacturer}</h2>
                <h2>Cost in Credits: {starship.cost_in_credits}</h2>
                <h2>Length: {starship.length}</h2>
                <h2>Crew: {starship.crew}</h2>
                <h2>Passengers: {starship.passengers}</h2>
                <h2>Cargo Capacity: {starship.cargo_capacity}</h2>
            </div>
        ))}
    </>
);

export default Starships;

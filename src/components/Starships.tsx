import React from 'react';
import styles from '../styles/Grid.module.css';

// Define the shape of the Starships data
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

// Define the props for the Starships component
interface StarshipsProps {
    data: StarshipData[];
}

// Define the Starships component
const Starships: React.FC<StarshipsProps> = ({ data }) => (
    <>
        {/* Render the list of Starships */}
        <div className={styles.grid__container}>
            {data.map((starship, index) => (
                <div key={index}>
                    {/* Display Starships information */}
                    <h2>Name: {starship.name}</h2>
                    <p>
                        <strong>Model:</strong> {starship.model}
                    </p>
                    <p>
                        <strong>Manufacturer:</strong> {starship.manufacturer}
                    </p>
                    <p>
                        <strong>Cost in Credits:</strong> {starship.cost_in_credits}
                    </p>
                    <p>
                        <strong>Length:</strong> {starship.length}
                    </p>
                    <p>
                        <strong>Crew:</strong> {starship.crew}
                    </p>
                    <p>
                        <strong>Passengers:</strong> {starship.passengers}
                    </p>
                    <p>
                        <strong>Cargo Capacity:</strong> {starship.cargo_capacity}
                    </p>
                </div>
            ))}
        </div>
    </>
);

export default Starships;

import React from 'react';
import styles from '../styles/Grid.module.css';

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
}

const Starships: React.FC<StarshipsProps> = ({ data }) => (
    <>
        <div className={styles.grid__container}>
            {data.map((starship, index) => (
                <div key={index}>
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

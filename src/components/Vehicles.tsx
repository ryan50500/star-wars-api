import React from 'react';
import styles from '../styles/Grid.module.css';

interface VehicleData {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
}

interface VehiclesProps {
    data: VehicleData[];
}

const Vehicles: React.FC<VehiclesProps> = ({ data }) => (
    <div className={styles.grid__container}>
        {data.map((vehicle, index) => (
            <div key={index}>
                <h2>Name: {vehicle.name}</h2>
                <p>
                    <strong>Model:</strong> {vehicle.model}
                </p>
                <p>
                    <strong>Manufacturer:</strong> {vehicle.manufacturer}
                </p>
                <p>
                    <strong>Cost in Credits:</strong> {vehicle.cost_in_credits}
                </p>
                <p>
                    <strong>Length:</strong> {vehicle.length}
                </p>
                <p>
                    <strong>Crew:</strong> {vehicle.crew}
                </p>
                <p>
                    <strong>Passengers:</strong> {vehicle.passengers}
                </p>
                <p>
                    <strong>Cargo Capacity:</strong> {vehicle.cargo_capacity}
                </p>
            </div>
        ))}
    </div>
);

export default Vehicles;

import React from 'react';
import styles from '../styles/Grid.module.css'; // Import the CSS module

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
    <div className={styles.grid__container}> {/* Use the grid container style */}
        {data.map((vehicle, index) => (
            <div key={index} className={styles.gridItem}> {/* Use the grid item style */}
                <h2>Name: {vehicle.name}</h2>
                <h2>Model: {vehicle.model}</h2>
                <h2>Manufacturer: {vehicle.manufacturer}</h2>
                <h2>Cost in Credits: {vehicle.cost_in_credits}</h2>
                <h2>Length: {vehicle.length}</h2>
                <h2>Crew: {vehicle.crew}</h2>
                <h2>Passengers: {vehicle.passengers}</h2>
                <h2>Cargo Capacity: {vehicle.cargo_capacity}</h2>
            </div>
        ))}
    </div>
);

export default Vehicles;

import React from 'react';
import styles from '../styles/Grid.module.css';

// Define the shape of the film data
interface FilmData {
    title: string;
    episode_id: number;
    director: string;
    producer: string;
    release_date: string;
}

// Define the props for the Films component
interface FilmsProps {
    data: FilmData[];
}

// Define the Films component
const Films: React.FC<FilmsProps> = ({ data }) => (
    <>
        {/* Render the list of films */}
        <div className={styles.grid__container}>
            {data.map((film, index) => (
                <div key={index}>
                    {/* Display film information */}
                    <h2>Title: {film.title}</h2>
                    <p>
                        <strong>Episode:</strong> {film.episode_id}
                    </p>s
                    <p>
                        <strong>Director:</strong> {film.director}
                    </p>
                    <p>
                        <strong>Producer:</strong> {film.producer}
                    </p>
                    <p>
                        <strong>Release Date:</strong> {film.release_date}
                    </p>
                </div>
            ))}
        </div>
    </>
);

export default Films;

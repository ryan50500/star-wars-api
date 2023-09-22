import React from 'react';
import styles from '../styles/Grid.module.css';

interface FilmData {
    title: string;
    episode_id: number;
    director: string;
    producer: string;
    release_date: string;
}

interface FilmsProps {
    data: FilmData[];
}

const Films: React.FC<FilmsProps> = ({ data }) => (
    <>
        <div className={styles.grid__container}>
            {data.map((film, index) => (
                <div key={index}>
                    <h2>Title: {film.title}</h2>
                    <p>
                        <strong>Episode:</strong> {film.episode_id}
                    </p>
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


import React from 'react';

interface FilmData {
    title: string;
    episode_id: number;
    director: string;
    producer: string;
    release_date: string;
}

interface FilmsProps {
    data: FilmData[],
}

const Films: React.FC<FilmsProps> = ({ data }) => (
    <>
        {data.map((film, index) => (
            <div key={index}>
                <h2>Title: {film.title}</h2>
                <h2>Episode: {film.episode_id}</h2>
                <h2>Director: {film.director}</h2>
                <h2>Producer: {film.producer}</h2>
                <h2>Release Date: {film.release_date}</h2>
            </div>
        ))}
    </>
);

export default Films;
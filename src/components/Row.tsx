import React from 'react';
import { getMovies } from '../services/api';
import '../css/Row.css';
import ReactPlayer from 'react-player';
const imageHost = "https://image.tmdb.org/t/p/original/";


interface RowProps {
    title: any,
    path: any,
    isLarge: boolean
}
const Row: React.FC<RowProps> = ({ title, path, isLarge }) => {
    const [movies, setMovies] = React.useState([]);

    const fetchMovies = async (_path: any) => {
        try {
            const data = await getMovies(_path);
            setMovies(data?.results);
        } catch (e) {
            console.log("error fetchMovies: ", e);
        }
    }

    React.useEffect(() => {
        fetchMovies(path);
    }, [path])

    return (
        <div className='row-container'>
            <h2 className='row-header'>{title}</h2>
            <div className='row-cards'>
                {movies?.map((movie: any) => {
                    return <img className={`movie-card ${isLarge && 'movie-card-large'}`}
                        key={movie.id}
                        src={`${imageHost}${movie.poster_path}`} 
                        alt={movie.name} />
                })}
            </div>
        </div>
    )
}

export default Row;
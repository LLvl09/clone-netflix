import '../css/Banner.css';
import React from 'react'
import categories, { getMovies } from '../services/api';


const Banner = () => {
    interface Movie {
        backdrop_path: any,
        title: any,
        name: any,
        original_name: any,
        overview: any
        // Outras propriedades do filme...
    }
    const [movie, setMovie] = React.useState<Movie>();
    const fetchRandowMovie = async (categories: any[]) => {
        try {
            if (categories) {
                const randomCategory = categories.find(category => category.name === 'popular');

                const data = await getMovies(randomCategory.path);
                const movies = data.results;
                const randomIndex = Math.floor(Math.random() * movies.length);
                setMovie(movies[randomIndex]);
                console.log(movie);
            }
        } catch (e) {
            console.log('Banner fetchRandowMovie error: ', e);
        }
    }
    React.useEffect(() => {
        fetchRandowMovie(categories);
    }, []);
    function truncate(str:any, n:any) {
        return str?.length > n ? str.substring(0, n - 1) + "..." : str;
    }
    return (
        <header className='banner-container' style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            

        }}>
            <div className='gradient-overlay'></div>
            <div className='banner-content'>

                <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner-buttons'>
                    <button className='banner-button'>Assistir</button>
                    <button className='banner-button'>Minha Lista</button>
                </div>
                <h2 className='banner-description'>{truncate(movie?.overview, 150)}</h2>
            </div>
        </header>
    )
}

export default Banner;
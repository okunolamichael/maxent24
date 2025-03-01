import React, { useEffect, useState } from 'react';
import useStyles from './styles';
// import Search from './components/Search';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

const Movies = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  const classes = useStyles();
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();
      
      if(data.Response === "False") {
        setErrorMessage(data.Error || 'Error fetching movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);

    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(); // Fixed typo: "fatchMovies" -> "fetchMovies"
  }, []); // Removed "deps" since it was undefined; empty array means run once on mount

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <h1>
            <img src="./MAXENT24_white.png" alt="" className="w-64" />
            <img src="hero-img.png" alt="" />
            Find <span className="text-gradient">Movie</span> Youll Enjoy Without the Hassle
          </h1>
          {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
        </header>

        <section className={classes.allmovies}>
          <h2 className='mt-[40px]'>All Movies</h2>
          {isLoading ? (
          <p className='text-white'>Loading...</p>
        ) : errorMessage ? (
          <p className='text-red-500'>{errorMessage}</p>
        ) : (
          <ul className={classes.allmoviesUl}>
            {movieList.map((movie) => (
              <li key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={classes.allmovieImg}/>
                <h3 className='text-white'>{movie.title}</h3>
                <p>{movie.overview}</p>
              </li>
            ))}
          </ul>
        )}
        </section>
      </div>
    </main>
  );
};

export default Movies;
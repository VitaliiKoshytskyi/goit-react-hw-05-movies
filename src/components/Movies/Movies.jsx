import { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';
import css from './Movies.module.css';

import { getMovies } from 'services/moviesAPI';

const Movies = () => {
  const [state, setState] = useState([]);

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMovies();

        setState(prevState => {
          return [...prevState, ...data.results];
        });
      } catch ({ message }) {
        console.log(message);
      } finally {
      }
    };

    fetchData();
  }, []);

  const elements = state.map(item => (
    <li key={item.id}>
      <Link to={`/movies/${item.id}`} state={{ from: location }}>
        <p>{item.title}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.title}
          width={300}
        />
      </Link>
    </li>
  ));
  return (
    <>
      <h2 className={css.title}>Trending Today</h2>
      <ul>{elements}</ul>
    </>
  );
};

export default Movies;

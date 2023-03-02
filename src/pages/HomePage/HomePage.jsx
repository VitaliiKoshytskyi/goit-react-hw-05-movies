import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovies } from 'services/moviesAPI';

import css from './HomePage.module.css';

const HomePage = () => {
  const [state, setState] = useState([]);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMovies();
        setState(prevState => {
          return [...prevState, ...data.results];
        });
      } catch ( response ) {
        setError(response.message || 'Oops sothing wrong');
      } finally {
      }
    };

    fetchData();
  }, []);

  const elements = state.map(item => (
    <li key={item.id}>
      <Link
        className={css.link}
        to={`/movies/${item.id}`}
        state={{ from: location }}
      >
        <p className={css.title}>{item.title}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.title}
          width={350}
        />
      </Link>
    </li>
  ));

  return (
    <div className={css.container}>
       {error && <p>{error}</p>}
      <h3 className={css.title}>Trending Today</h3>
      <ul className={css.list}>{elements}</ul>
    </div>
  );
};
export default HomePage;

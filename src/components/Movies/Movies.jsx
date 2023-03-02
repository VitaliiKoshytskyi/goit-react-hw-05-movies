import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import css from './Movies.module.css';

import { getMovies } from 'services/moviesAPI';



const Movies = () => {
     const [state, setState] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMovies();
        console.log(data)

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
          <Link to={`/movies/${item.id}`}>
              <p>{item.title}</p>
              <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} width={200} />
          </Link>
      </li>
  ));
  return (
    <>
      <h2 className={css.title}>Trending Today</h2>
      <ul>{ elements}</ul>
    </>
  );
}

export default Movies
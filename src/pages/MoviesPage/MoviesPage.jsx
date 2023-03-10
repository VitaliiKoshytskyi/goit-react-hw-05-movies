import css from './MoviesPage.module.css';

import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import Searchbar from 'components/SearchBar/SearchBar';
import { getSearchMovies } from 'services/moviesAPI';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [total, setTotal] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getSearchMovies(search);
        setTotal(data.total_results )
        setMovies(prevState => {
          return [...prevState, ...data.results];
        });
      } catch (response) {
        setError(response.message || 'Oops sothing wrong');
      }
    };
    if (search) {
      fetchData();
    }
  }, [search]);

  const updateSearch = search => {
    setMovies([]);
    setSearchParams({ search });
  };

  const elements = movies.map(item => {
    const itembackdrop =
      item.backdrop_path === null
        ? 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
        : `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
    return (
      <li key={item.id}>
        <Link to={`/movies/${item.id}`} state={{ from: location }}>
          <p>{item.title}</p>
          <img src={itembackdrop} alt={item.title} width="200" />
        </Link>
      </li>
    );
  });

  return (
    <div>
      <Searchbar onSubmit={updateSearch} />
      {movies.length > 0 && <ul className={css.list}>{elements}</ul>}
      {error && <p>{error}</p>}
      {total === 0 &&<p>Ooopps! we found nothing</p>}
    </div>
  );
};
export default MoviesPage;

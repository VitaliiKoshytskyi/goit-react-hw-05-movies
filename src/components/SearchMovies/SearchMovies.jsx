// import css from './SearchMovies.module.css';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Searchbar from 'components/SearchBar/SearchBar';
import { getSearchMovies } from 'services/moviesAPI';

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
    // const [search, setSearch] = useState('');
    const [searchParams, setSearchParams] = useSearchParams()
    const search = searchParams.get("search")
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getSearchMovies(search);
        console.log(data);

        setMovies(prevState => {
          return [...prevState, ...data.results];
        });
      } catch (response) {
          
        setError(response.message || 'Oooopppsss! Try again');
      }
    };
    if (search) {
    fetchData();
    }
  }, [search]);

  const updateSearch = search => {
    setMovies([]);
    //   setSearch(search);
      setSearchParams({search})
  };

  const elements = movies.map(item => {
    const itembackdrop =
      item.backdrop_path === null
        ? 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
        : `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`;
    return (
      <li key={item.id}>
        <Link to={`/movies/${item.id}`}>
          <p>{item.title}</p>
          <img src={itembackdrop} alt={item.title} width='200'  />
        </Link>
      </li>
    );
  });

  return (
    <>
          <Searchbar onSubmit={updateSearch} />
           {error && <p>{error}</p>}

      <ul>{elements}</ul>
    </>
  );
};

export default SearchMovies;

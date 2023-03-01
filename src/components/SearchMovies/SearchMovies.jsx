import css from './SearchMovies.module.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import Searchbar from 'components/SearchBar/SearchBar';
import { getSearchMovies } from 'services/moviesAPI';

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [imageDetails, setImageDetails] = useState({});
  const [totalImages, setTotalImages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
          const { data } = await getSearchMovies();
          console.log(data)
        setTotalImages(data.total);

        setMovies(prevState => {
          return [...prevState, ...data.results];
        });
      } catch (response) {
        setError(response.message || 'Oooopppsss! Try again');
      } finally {
        setLoading(false);
      }
    };
    // if (search) {
      fetchData();
    // }
  }, [search, page]);

  const showModal = ({ largeImageURL, tag }) => {
    setModalShow(true);
    setImageDetails({ largeImageURL, tag });
  };

  const closeModal = () => {
    setModalShow(false);
  };

  const updateSearch = search => {
    setMovies([]);
    setPage(1);
    setSearch(search);
  };

  const loadMoreHandle = () => {
    setPage(prevState => {
      return prevState + 1;
    });
    };
    


    
    const elements = movies.map(item => {


        const itembackdrop = item.backdrop_path=== null?  "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg":   `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` 
     return <li key={item.id}>
            
          <Link to={`/movies/${item.id}`}>
              <p>{item.title}</p>
                <img src={ itembackdrop } alt={item.title} width={200} />
          </Link>
        </li>

    }
        
      
   
     
        
  );

  return (
    <>
      
          <Searchbar onSubmit={updateSearch} />
          
          <ul>{ elements}</ul>
      
    </>
  );
};

export default SearchMovies



  









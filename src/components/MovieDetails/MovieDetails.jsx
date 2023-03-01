import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


// import css from './Movies.module.css';

import { getMovieDetails } from 'services/moviesAPI';

const MovieDetails = () => {
    const [state, setState] = useState({});
    

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMovieDetails(params.movieId);

        setState({ data });
      } catch ({ message }) {
      } finally {
      }
      };
      
           fetchData();
        
  }, [params.movieId]);
    
    
    if (!state.data) {
        return
    }
        
  
    const { backdrop_path, title, overview, genres,vote_average,release_date} = state.data
    
    const genresResults = genres.map(item => <li key={item.name}>{item.name}</li>)
    
  return (
    <div>
          <h2>{ title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="" />
          <p>{overview}</p>
          <ul>{genresResults}</ul>
          <p>{vote_average}</p>
          <p>{ release_date}</p>
          
      
    </div>
  );
};

export default MovieDetails;

import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';

// import css from './Movies.module.css';

import { getMovieDetails } from 'services/moviesAPI';

const MovieDetails = () => {
  const [state, setState] = useState({});
  const location = useLocation();
  const from= location.state?.from || '/'
  console.log(location);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMovieDetails(params.movieId);

        setState({ data });
      } catch ({ message }) {}
    };

    fetchData();
  }, [params.movieId]);

  if (!state.data) {
    return;
  }

  const goBack = () => navigate(from);

  const { poster_path, title, overview, genres, vote_average, release_date } =
    state.data;

  const genresResults = genres.map(item => (
    <li key={item.name}>{item.name}</li>
  ));
const votes = Math.round(vote_average*10) 
  return (
    <div>
      <div>
        <button onClick={goBack}>Go back</button>
      </div>
      <h2>{title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        width="200"
      />
      <p>{overview}</p>
      <ul>{genresResults}</ul>
      <p>{votes}%</p>
      <p>{release_date}</p>
      <div>
        <h3>Additional Information</h3>
        <Link to={`cast`} state={{ from }} >Cast</Link>
        <Link to={`reviews`} state={{ from }}> Reviews</Link>
        <Outlet />
        
      </div>
    </div>
  );
};

export default MovieDetails;

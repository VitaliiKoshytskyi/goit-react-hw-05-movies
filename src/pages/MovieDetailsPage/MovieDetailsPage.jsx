import css from './MovieDetailsPage.module.css'

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

const MovieDetailsPage = () => {
  const [state, setState] = useState({});
  const location = useLocation();
  const from = location.state?.from || '/';

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
  const votes = Math.round(vote_average * 10);

  const date = new Date(release_date);
  const year = date.getFullYear(release_date);
  


  return (
    <div>
      <div className={css.button}>
        <button  onClick={goBack}>Go back</button>
      </div>
      <div className={css.mainBox}>
        <div className={css.yearBox}>
           <h2>{title}</h2>
          <p className={css.year}>{'('}{year}{')'}</p>
          
        
        </div>
        
        <img className={css.img}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          width="350"
        />
        <p className={css.score}>User score: {votes}%</p>
        
        <p className={css.overview}>Overview: {overview}</p>
        <ul className={css.genres}>Genres:{genresResults}</ul>
        
        
      </div>

      <div className={css.loverBox}>
        <h3>Additional Information</h3>
        <Link className={css.loverLink} to={`cast`} state={{ from }}>
          Cast |
        </Link>
        <Link className={css.loverLink}
          to={`reviews`} state={{ from }}>
          {' '}
          Reviews
        </Link>
        <Outlet />
      </div>
    </div>
  );
};
export default MovieDetailsPage;

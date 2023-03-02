import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/moviesAPI';

const MovieCast = () => {
  const params = useParams();
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMovieCredits(params.movieId);

        setState({ data });
      } catch ({ message }) {}
    };

    fetchData();
  }, [params.movieId]);

  if (!state.data) {
    return;
  }

  const cast = state.data.cast;

  const element = cast.map(item => {
    const backdrop =
      item.profile_path === null
        ? 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
        : `https://image.tmdb.org/t/p/w500/${item.profile_path}`;

    return (
      <li key={item.id}>
        <p>{item.name}</p>
        <p>{item.character}</p>
        <img src={backdrop} width="100" alt="" />
      </li>
    );
  });

  return element;
};

export default MovieCast;

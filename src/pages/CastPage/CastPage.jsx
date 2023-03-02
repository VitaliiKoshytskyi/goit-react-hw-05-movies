import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/moviesAPI';
import css from './Cast.module.css';

const CastPage = () => {
  const params = useParams();
  const [state, setState] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMovieCredits(params.movieId);
        setState({ data });
      } catch (response) {
        setError(response.message || 'Oops sothing wrong');
      }
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
        <img className={css.img} src={backdrop} width="100" alt="" />
        <p>{item.name}</p>
        <p>Character: {item.character}</p>
      </li>
    );
  });

  return <ul className={css.list}>
    {element}
    {error && <p>{error}</p>}
    {cast.length===0&&<p>Ooppsss no casts found</p>}
  </ul>;
};

export default CastPage;

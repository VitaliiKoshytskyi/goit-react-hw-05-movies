import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesAPI';

const ReviewsPage = () => {
  const params = useParams();
  const [state, setState] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMovieReviews(params.movieId);
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

  const reviews = state.data.results;

  const element = reviews.map(item => (
    <li key={item.id}>
      <p>Author: {item.author}</p>
      <p>{item.content}</p>
    </li>
  ));

  return <ul>
     {error && <p>{error}</p>}
    {element}
    {reviews.length===0&&<p>Ooppsss no reviews found</p>}
  </ul>;
};

export default ReviewsPage;

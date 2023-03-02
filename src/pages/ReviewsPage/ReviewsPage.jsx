import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesAPI';


const ReviewsPage = () => {
    const params = useParams();
    const [state, setState] = useState([]);
    

     useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMovieReviews(params.movieId);

        setState({ data });
      } catch ({ message }) {}
    };

    fetchData();
  }, [params.movieId]);

  if (!state.data) {
    return;
    }
    
    const reviews = state.data.results;

  const element = reviews.map(item => (
    <li key={item.id}>
      <p>{item.author}</p> <p>{item.content}</p>
    </li>
  ));

     return <ul>
         <li>Reviews Page</li>
         {element}
    </ul>
}

export default ReviewsPage
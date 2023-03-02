

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews} from "services/moviesAPI";



const MovieReviews = () => {
    

    const params = useParams();
    const [state, setState] = useState([])

     useEffect(() => {
    const fetchData = async () => {
      try {
          const { data } = await getMovieReviews(params.movieId);
          console.log(data.results)

        setState({ data });
      } catch ({ message }) {
      } 
      };
      
           fetchData();
        
     }, [params.movieId]);
    
     if (!state.data) {
        return
    }
    
    

    const reviews = state.data.results
    
    
    
    const element = reviews.map(item => {
        
        return <li><p>{item.author}</p>
            <p>{item.content}</p>
             
        </li>
    })

    return element
    

}

export default MovieReviews

import { useState, useEffect } from 'react'

import { getMovies } from 'services/moviesAPI'

import css from './HomePage.module.css'



const HomePage = () => {
    const [state,setState] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await getMovies();
          
                setState(prevState => {
                    return [...prevState, ...data.results];
                });
            } catch ({message}) {
       console.log(message)
      } finally {
        
      }
    };
    
      fetchData();
    
  }, []);


    return (
        <h2 className={css.title}>Home</h2>
    )
    
}
export default HomePage
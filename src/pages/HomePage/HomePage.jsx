import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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

    const elements = state.map(item => {
        console.log(item.backdrop_path)
        return (

            <Link>
            <li key={item.id}>
            <p>{item.title}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" />
        </li>
            
            </Link>
        )
        
        
    })
    console.log(elements)
    return (<>
    
        <h2 className={css.title}>Trending Today</h2>
        {elements}
    </>
        
    )
    
}
export default HomePage
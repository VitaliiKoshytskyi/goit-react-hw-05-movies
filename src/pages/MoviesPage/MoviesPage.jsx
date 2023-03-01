import css from './MoviesPage.module.css'

import SearchMovies from 'components/SearchMovies/SearchMovies'



const MoviesPage = () => {
    return (
        <div>
 <h2 className={css.title}>Movies</h2>
        <SearchMovies />

        </div>
       
    )
    
}
export default MoviesPage
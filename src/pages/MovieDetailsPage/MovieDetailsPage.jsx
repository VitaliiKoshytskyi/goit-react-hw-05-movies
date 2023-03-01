import css from './MovieDetailsPage.module.css'
import MovieDetails from 'components/MovieDetails/MovieDetails'



const MovieDetailsPage = () => {
    return (
        <div>


<h2 className={css.title}>Movie Details</h2>

        <MovieDetails />
        </div>
        
    )
    
}
export default MovieDetailsPage
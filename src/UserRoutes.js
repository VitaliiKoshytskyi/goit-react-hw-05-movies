import { Routes, Route } from 'react-router-dom';



import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import CastPage from 'pages/CastPage/CastPage';
import ReviewsPage from 'pages/ReviewsPage/ReviewsPage';



const UserRoutes = () => {
    
    return (
         <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
          <Route path='cast' element={<CastPage />} />
          <Route path='reviews' element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        
        
        {/* <Route path="*" element={<HomePage />} /> */}
        
        
      </Routes>
    )
}

export default UserRoutes
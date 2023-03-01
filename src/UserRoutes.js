import { Routes, Route } from 'react-router-dom';



import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';



const UserRoutes = () => {
    
    return (
         <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage/>} />
        {/* <Route path="*" element={<HomePage />} /> */}
        
        
      </Routes>
    )
}

export default UserRoutes
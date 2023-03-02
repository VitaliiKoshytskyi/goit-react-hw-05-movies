import { Routes, Route } from 'react-router-dom';
import { lazy,Suspense } from 'react';



const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import( 'pages/MovieDetailsPage/MovieDetailsPage'));
// const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const CastPage = lazy(() => import('pages/CastPage/CastPage'));
const ReviewsPage = lazy(()=> import ('pages/ReviewsPage/ReviewsPage'));



const UserRoutes = () => {
    
    return (
      <Suspense fallback={<p>...Loading</p>}>
         <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
          <Route path='cast' element={<CastPage />} />
          <Route path='reviews' element={<ReviewsPage />} />
        </Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        
        
        <Route path="*" element={<HomePage />} />
        
        
      </Routes>
        </Suspense>
    )
}

export default UserRoutes
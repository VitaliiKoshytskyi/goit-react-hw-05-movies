import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar/NavBar';

import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage/>} />
        {/* <Route path="*" element={<HomePage />} /> */}
        
        
      </Routes>
    </BrowserRouter>
  );
};

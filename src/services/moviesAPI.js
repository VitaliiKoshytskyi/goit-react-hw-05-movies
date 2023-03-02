import axios from "axios";

const moviesInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params:{
  api_key:"7655faabc717e4bac2b661555353909e"
  }
});

export const getMovies = () => {
  return moviesInstance.get('/trending/movie/day');
};

export const getMovieDetails = (id) => {
  return moviesInstance.get(`/movie/${id}`)
}

export const getMovieCredits = (id) => {
  return moviesInstance.get(`/movie/${id}/credits`)
}
export const getMovieReviews = (id) => {
  return moviesInstance.get(`/movie/${id}/reviews`)
}

export const getSearchMovies = (query) => {
  return moviesInstance.get('/search/movie', {
    params: {
      include_adult: 'false',
      page: 1,
      query,
  } })
}


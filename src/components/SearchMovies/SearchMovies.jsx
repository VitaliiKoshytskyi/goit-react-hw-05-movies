// // import css from './SearchMovies.module.css';
// import { useState, useEffect } from 'react';
// import { Link, useSearchParams, useLocation} from 'react-router-dom';

// import Searchbar from 'components/SearchBar/SearchBar';
// import { getSearchMovies } from 'services/moviesAPI';

// const SearchMovies = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const search = searchParams.get('search');
  
// const location = useLocation()
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data } = await getSearchMovies(search);
//         console.log(data);

//         setMovies(prevState => {
//           return [...prevState, ...data.results];
//         });
//       } catch (response) {
//         console.log(response.message);
//       }
//     };
//     if (search) {
//       fetchData();
//     }
//   }, [search]);

//   const updateSearch = search => {
//     setMovies([]);
//     setSearchParams({ search });
//   };

//   const elements = movies.map(item => {
//     const itembackdrop =
//       item.backdrop_path === null
//         ? 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
//         : `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
//     return (
//       <li key={item.id}>
//         <Link to={`/movies/${item.id}`} state={{ from:location}}>
//           <p>{item.title}</p>
//           <img src={itembackdrop} alt={item.title} width="200" />
//         </Link>
//       </li>
//     );
//   });

//   return (
//     <>
//       <Searchbar onSubmit={updateSearch} />
//       <ul>{elements}</ul>
//     </>
//   );
// };

// export default SearchMovies;

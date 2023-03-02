import { BrowserRouter,  } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import UserRoutes from 'UserRoutes';


export const App = () => {


  return (
    <BrowserRouter basename='/goit-react-hw-05-movies'>
      <NavBar />
     <UserRoutes />
    </BrowserRouter>
  );
};

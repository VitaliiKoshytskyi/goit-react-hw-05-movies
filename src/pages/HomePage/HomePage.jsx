import Movies from 'components/Movies/Movies';

import css from './HomePage.module.css';

const HomePage = () => {
 
    return (
        <div>
        <h2 className={css.title}>Home Page</h2>
        <Movies />
        </div>
    )
};
export default HomePage;

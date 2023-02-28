import { NavLink } from 'react-router-dom';
import menu from '../../data/menu.json';
import css from './PageMenu.module.css';

const PagesMenu = () => {
  const elements = menu.map(({ id, title, link }) => (
    <NavLink className={css.link} to={link} key={id}>
      {title}
    </NavLink>
  ));
  return <>{elements}</>;
};

export default PagesMenu;
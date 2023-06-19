import { Link } from 'react-router-dom';
import { SlOptionsVertical } from 'react-icons/sl';
import { BsSearch } from 'react-icons/bs';
import classes from './PCDevicesNav.module.scss';
import ThemeMode from '../../ThemeMode/ThemeMode';

const PCDevicesNav = () => {
  return (
    <div className={classes.navContainer}>
      <ul>
        <li>
          <div>
            <BsSearch />
          </div>
        </li>
        <li>
          <Link to="#aboutUs" className={classes.link}>
            O nas
          </Link>
        </li>
        <li>
          <Link to="#contact" className={classes.link}>
            Kontakt
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link to="#offert" className={classes.link}>
            Oferta szkoleń
          </Link>
          <ul className={classes.menuItem__dropdown}>
            <li>
              <Link to="/">Robotyka</Link>
            </li>
            <li>
              <Link to="/"> AI</Link>
            </li>
            <li>
              <Link to="/">ML</Link>
            </li>
            <li>
              <Link to="/">Deep Learning (DL)</Link>
            </li>
            <li>
              <Link to="/">Matematyka</Link>
            </li>
            <li>
              <Link to="/">Python</Link>
            </li>
            <li>
              <Link to="/">C</Link>
            </li>
          </ul>
        </li>
        <li className={classes.link}>
          <Link to="/login"> Zaloguj się</Link>
        </li>
        <li className={classes.link}>
          <Link to="/login"> Zarejestruj się</Link>
        </li>
        <li className={classes.navContainer__options}>
          <SlOptionsVertical />
          <div className={classes[`navContainer__options--theme`]}>
            <ThemeMode />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PCDevicesNav;

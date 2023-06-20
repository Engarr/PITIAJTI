import { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import classes from './MobileNav.module.scss';

const MobileNav = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const menuHandler = () => {
    setIsMenuActive((prev) => !prev);
  };
  return (
    <div className={classes.mobileNavContainer}>
      <div className={classes.mobileNavContainer__burgerBox}>
        <div>
          <BsSearch />
        </div>
        <div
          onClick={menuHandler}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              menuHandler();
            }
          }}
          role="button"
          tabIndex={0}
        >
          <CiMenuBurger />
        </div>
      </div>
      {isMenuActive && (
        <div className={classes.mobileNavContainer__navMenu}>
          <div className={classes[`mobileNavContainer__navMenu--closeButton`]}>
            <button type="button" onClick={menuHandler}>
              <AiOutlineClose />
            </button>
          </div>
          <div>
            <ul>
              <li>
                <Link to="#aboutUs">O nas</Link>
              </li>
              <li>
                <Link to="#contact">Kontakt</Link>
              </li>
              <li>
                <Link to="#offert">Oferta szkoleń</Link>
                {/* <ul className={classes.dropdown}>
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
              </ul> */}
              </li>
              <li>
                <Link to="/zaloguj"> Zaloguj się</Link>
              </li>
              <li>
                <Link to="/zarejestruj"> Zarejestruj się</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;

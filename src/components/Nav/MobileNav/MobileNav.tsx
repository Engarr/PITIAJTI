import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import classes from './MobileNav.module.scss';
import logo from '../../../assets/310977058_530709935729768_1723105992259844927_n.png';
import { useState } from 'react';

interface PropsType {
  isMenuActive: boolean;
  menuHandler: () => void;
}

const MobileNav = ({ isMenuActive, menuHandler }: PropsType) => {
  const [isoffertMenuActive, setIsoffertMenuActive] = useState(false);

  const menuOffertHandler = () => {
    setIsoffertMenuActive((prev) => !prev);
  };
  return (
    <div className={classes.mobileNavContainer}>
      {isMenuActive && (
        <div className={classes.mobileNavContainer__navMenu}>
          <div className={classes[`mobileNavContainer__navMenu--logo`]}>
            <Link to="/" onClick={menuHandler}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={classes[`mobileNavContainer__navMenu--closeButton`]}>
            <button type="button" onClick={menuHandler}>
              <AiOutlineClose />
            </button>
          </div>
          <div className={classes[`mobileNavContainer__navMenu--links`]}>
            <div>
              <Link to="#aboutUs">O nas</Link>
            </div>
            <div>
              <Link to="#contact">Kontakt</Link>
            </div>
            <div
              className={classes[`mobileNavContainer__navMenu--links-offetrs`]}
              onClick={menuOffertHandler}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  menuOffertHandler();
                }
              }}
              role="button"
              tabIndex={0}
            >
              <Link to="#offert">Oferta szkoleń</Link>
              <IoIosArrowDown
                className={classes[`mobileNavContainer__navMenu--links-icon`]}
              />
            </div>
            {isoffertMenuActive && (
              <div className={classes.dropdown}>
                <ul>
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
              </div>
            )}

            <div>
              <Link to="/zaloguj"> Zaloguj się</Link>
            </div>
            <div>
              <Link to="/zarejestruj"> Zarejestruj się</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;

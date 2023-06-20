import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlOptionsVertical } from 'react-icons/sl';
import { BsSearch } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import classes from './PCDevicesNav.module.scss';
import ThemeMode from '../../ThemeMode/ThemeMode';
import DropdownItem from './dropdownItem/DropdownItem';
import ai from '../../../assets/AI.png';
import robo from '../../../assets/Robo.png';
import math from '../../../assets/math.png';
import c from '../../../assets/C.png';
import ml from '../../../assets/ml.png';
import phyton from '../../../assets/phyton.png';
import dl from '../../../assets/dl.png';
import Modal from '../../Modal/Modal';

const PCDevicesNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  const isMenuVisibleHandler = () => {
    setIsVisible((prev) => !prev);
  };
  const hideMenuHandler = () => {
    setIsVisible(false);
  };
  return (
    <div className={classes.navContainer}>
      <ul>
        <div
          onClick={hideMenuHandler}
          onKeyDown={hideMenuHandler}
          role="button"
          tabIndex={0}
        >
          <li>
            <BsSearch />
          </li>
        </div>
        <div
          onClick={hideMenuHandler}
          onKeyDown={hideMenuHandler}
          role="button"
          tabIndex={0}
        >
          <li>
            <Link to="#aboutUs" className={classes.link} tabIndex={-1}>
              O nas
            </Link>
          </li>
        </div>
        <div
          onClick={hideMenuHandler}
          onKeyDown={hideMenuHandler}
          role="button"
          tabIndex={0}
        >
          <li>
            <Link to="#contact" className={classes.link} tabIndex={-1}>
              Kontakt
            </Link>
          </li>
        </div>

        <li className={classes.menuItem}>
          <Link
            to="#offert"
            className={classes.link}
            onClick={isMenuVisibleHandler}
          >
            Oferta szkoleń
            <IoIosArrowDown
              className={`${classes.menuItem__arrow} ${
                isVisible
                  ? classes[`menuItem__arrow--down`]
                  : classes[`menuItem__arrow--up`]
              }`}
            />
          </Link>
        </li>

        {isVisible && (
          <ul className={classes.menuItem__dropdown}>
            <DropdownItem
              message="Robotyka"
              adress="/robotyka"
              image={robo}
              setIsVisible={setIsVisible}
            />
            <DropdownItem
              message="Sztuczna Inteligencja (AI)"
              adress="/ai"
              image={ai}
              setIsVisible={setIsVisible}
            />
            <DropdownItem
              message="Uczenie Maszynowe (ML)"
              adress="/ml"
              image={ml}
              setIsVisible={setIsVisible}
            />
            <DropdownItem
              message="Deep Learning (DL)"
              adress="/dl"
              image={dl}
              setIsVisible={setIsVisible}
            />
            <DropdownItem
              message="Matematyka"
              adress="/matematyka"
              image={math}
              setIsVisible={setIsVisible}
            />
            <DropdownItem
              message="Python (Programowanie)"
              adress="/python"
              image={phyton}
              setIsVisible={setIsVisible}
            />
            <DropdownItem
              message="C (Programowanie)"
              adress="/c"
              image={c}
              setIsVisible={setIsVisible}
            />
          </ul>
        )}
        <Modal show={isVisible} handler={isMenuVisibleHandler} />
        <div
          onClick={hideMenuHandler}
          onKeyDown={hideMenuHandler}
          role="button"
          tabIndex={0}
        >
          <li className={classes.link}>
            <Link to="/login" tabIndex={-1}>
              Zaloguj się
            </Link>
          </li>
        </div>
        <div
          onClick={hideMenuHandler}
          onKeyDown={hideMenuHandler}
          role="button"
          tabIndex={0}
        >
          <li className={classes.link}>
            <Link to="/zarejestruj" tabIndex={-1}>
              Zarejestruj się
            </Link>
          </li>
        </div>

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

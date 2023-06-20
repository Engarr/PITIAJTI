import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SlOptionsVertical } from 'react-icons/sl';
import { BsSearch } from 'react-icons/bs';
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
  const menuRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    const currentRef = menuRef.current;

    if (currentRef) {
      currentRef.addEventListener('mouseenter', handleMouseEnter);
      currentRef.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mouseenter', handleMouseEnter);
        currentRef.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isVisible]);

  return (
    <div className={classes.navContainer}>
      <ul>
        <li>
          <BsSearch />
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
        <div ref={menuRef}>
          <li className={classes.menuItem}>
            <Link to="#offert" className={classes.link}>
              Oferta szkoleń
            </Link>
          </li>
          {isVisible && (
            <div className={classes.menuItem__dropdown}>
              <DropdownItem
                message="Robotyka"
                adress="/robotyka"
                image={robo}
              />
              <DropdownItem
                message="Sztuczna Inteligencja (AI)"
                adress="/ai"
                image={ai}
              />
              <DropdownItem
                message="Uczenie Maszynowe (ML)"
                adress="/ml"
                image={ml}
              />
              <DropdownItem
                message="Deep Learning (DL)"
                adress="/dl"
                image={dl}
              />
              <DropdownItem
                message="Matematyka"
                adress="/matematyka"
                image={math}
              />
              <DropdownItem
                message="Python (Programowanie)"
                adress="/python"
                image={phyton}
              />
              <DropdownItem message="C (Programowanie)" adress="/c" image={c} />
            </div>
          )}
          <Modal show={isVisible} />
        </div>
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

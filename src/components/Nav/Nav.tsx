import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { CiMenuBurger } from 'react-icons/ci';

import classes from './Nav.module.scss';
import logo from '../../assets/310977058_530709935729768_1723105992259844927_n.png';
import MobileNav from './MobileNav/MobileNav';
import PCDevices from './PCDevicesNav/PCDevicesNav';
import Modal from '../Modal/Modal';

const Nav = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const menuHandler = () => {
    setIsMenuActive((prev) => !prev);
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.container__logoBox}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
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
        <PCDevices />
      </div>
      <MobileNav isMenuActive={isMenuActive} menuHandler={menuHandler} />
      <Modal show={isMenuActive} handler={menuHandler} />
    </>
  );
};

export default Nav;

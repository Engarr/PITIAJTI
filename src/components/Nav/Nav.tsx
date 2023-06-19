import { Link } from 'react-router-dom';

import classes from './Nav.module.scss';
import logo from '../../assets/310977058_530709935729768_1723105992259844927_n.png';
import MobileNav from './MobileNav/MobileNav';
import PCDevices from './PCDevicesNav/PCDevicesNav';

const Nav = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container__logoBox}>
        <Link to="/">
          <img src={logo} alt="logo" width={120} />
        </Link>
      </div>

      <div className={classes.container__actionBox}>
        <MobileNav />
        <PCDevices />
      </div>
    </div>
  );
};

export default Nav;

import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import Nav from '../../components/Nav/Nav';
import classes from './RootLayout.module.scss';
import { colorMode } from '../../app/slice/colorModeSlice';

const RootLayout = () => {
  const mode = useSelector(colorMode);

  return (
    <div className={` ${mode === 'dark' ? 'dark' : 'light'}`}>
      <header className={classes.header}>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

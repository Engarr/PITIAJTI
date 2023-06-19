import { useDispatch, useSelector } from 'react-redux';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { toggleMode, colorMode } from '../../app/slice/colorModeSlice';

const ThemeMode = () => {
  const dispatch = useDispatch();
  const mode = useSelector(colorMode);

  const toggleModeHandler = () => {
    dispatch(toggleMode());
  };
  return (
    <div>
      <p>Motyw:</p>
      <div
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            toggleModeHandler();
          }
        }}
        role="button"
        tabIndex={0}
        onClick={toggleModeHandler}
      >
        {mode === 'dark' ? <MdDarkMode /> : <MdLightMode />}
      </div>
    </div>
  );
};

export default ThemeMode;

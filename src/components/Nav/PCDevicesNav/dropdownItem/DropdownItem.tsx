import { Link } from 'react-router-dom';
import classes from './DropdownItem.module.scss';

interface PropsType {
  message: string;
  adress: string;
  image: string;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownItem = ({ message, adress, image, setIsVisible }: PropsType) => {
  const handleClick = () => {
    setIsVisible(false);
  };
  return (
    <div
      className={classes.card}
      onClick={handleClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          handleClick();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className={classes.card__imgBox} tabIndex={-1}>
        <Link to={`/${adress}`} tabIndex={-1}>
          <img src={image} alt={message} width={80} />
        </Link>
      </div>
      <Link to={`/${adress}`} tabIndex={-1}>
        {message}
      </Link>
    </div>
  );
};

export default DropdownItem;

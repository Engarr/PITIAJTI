import { Link } from 'react-router-dom';
import classes from './DropdownItem.module.scss';

interface PropsType {
  message: string;
  adress: string;
  image: string;
}

const DropdownItem = ({ message, adress, image }: PropsType) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__imgBox}>
        <Link to={`/${adress}`}>
          <img src={image} alt={message} width={80} />
        </Link>
      </div>
      <Link to={`/${adress}`}>{message}</Link>
    </div>
  );
};

export default DropdownItem;

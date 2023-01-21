import PropTypes from 'prop-types';
import s from '../FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ friend, avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.active : s.status}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
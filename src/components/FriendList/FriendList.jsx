// import { FriendListItem } from './FriendListItem';
// import PropTypes from 'prop-types';
// import s from './FriendList.module.css';

// export const FriendList = ({ friends }) => {
//   return (
//     <ul className={s.friendList}>
//       {friends.map(({ avatar, name, isOnline, id }) => (
//         <FriendListItem
//           key={id}
//           isOnline={isOnline}
//           avatar={avatar}
//           name={name}
//         />
//       ))}
//     </ul>
//   );
// };

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ),
// };
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
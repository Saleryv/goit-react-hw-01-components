import css from '../FriendListItem/FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
    const isOnlineBackground = isOnline ? 'online' : 'offline';
    const isOnlineMark = isOnline ? 'onlineStatus' : 'offlineStatus';
    return (
      <li className={css.item + ' ' + css[isOnlineBackground]}>
        <span className={css[isOnlineMark]}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  };

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;


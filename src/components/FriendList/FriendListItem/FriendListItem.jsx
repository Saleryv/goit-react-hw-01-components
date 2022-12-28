import css from '../FriendListItem/FriendListItem.module.css';
import PropTypes from 'prop-types';

 export const FriendListItem = ({ avatar, name, isOnline }) => {
    const isOnlineStatus = isOnline ? 'onlineStatus' : 'offlineStatus';
    return (
      <li className={css.item}>
        <span className={css[isOnlineStatus]}></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  };

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};



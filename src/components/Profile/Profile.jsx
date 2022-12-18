import PropTypes from 'prop-types';
import css from './Profile.module.css';


export const Profile = ({ username, tag, location, avatar, stats }) => {    
    return (
    <div className={css.Profile_profile__mxenJ}>
        <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.Profile_avatar__YMqwY}
    />
    <p className={css.Profile_name__MU1OG}>{username}</p>
    <p className={css.Profile_tag__LiGIU}>@{tag}</p>
    <p className={css.Profile_location__KdCvS}>{location}</p>
  </div>  
  
  <ul className={css.stats}>
     <div className={css.liwrapper}> 
    <li className={css.Profile_stats__item__OnWmg}>
      <span className={css.Profile_label__1Vmbr}>Followers</span>
      <span className={css.Profile_quantity__3qTiW}>{stats.followers}</span>
    </li>
    <li className={css.Profile_stats__item__OnWmg}>
      <span className={css.Profile_label__1Vmbr}>Views</span>
      <span className={css.Profile_quantity__3qTiW}>{stats.views}</span>
    </li>
    <li className={css.Profile_stats__item__OnWmg}>
      <span className={css.Profile_label__1Vmbr}>Likes</span>
      <span className={css.Profile_quantity__3qTiW}>{stats.likes}</span>
    </li>
     </div> 
  </ul>  
 </div>
    
    );
};
     
Profile.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.exact({
    username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    avatar: PropTypes.string.isRequired, 
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,   
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
   }),
  ),    
};






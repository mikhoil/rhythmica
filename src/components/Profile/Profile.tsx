import defaultAvatar from '../../assets/defaultAvatar.svg';
import styles from './Profile.module.scss';

export const Profile = () => {
    return (
        <div className={styles.profile}>
            <img src={defaultAvatar} alt="" />
        </div>
    );
};

import defaultAvatar from '../../assets/defaultAvatar.svg';
import playCircle from '../../assets/playCircle.svg';
import heart from '../../assets/heart.svg';
import styles from './AuthorCard.module.scss';

export const AuthorCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.icons}>
                <img src={playCircle} alt="" />
                <img src={heart} alt="" width={32} />
            </div>
            <img
                src={defaultAvatar}
                className={styles.avatar}
                alt=""
                width={150}
            />
            <h1>Имя исполнителя</h1>
            <h2>Жанр</h2>
        </div>
    );
};

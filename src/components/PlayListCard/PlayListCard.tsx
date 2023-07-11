import defaultAlbum from '../../assets/defaultAlbum.svg';
import playCircle from '../../assets/playCircle.svg';
import styles from './PlayListCard.module.scss';

export const PlayListCard = () => {
    return (
        <div className={styles.container}>
            <img src={defaultAlbum} alt="" />
            <img src={playCircle} className={styles.play} alt="" />
            <h1 className="text-base font-bold">Название плейлиста</h1>
            <h2 className="text-sm">Имя автора</h2>
        </div>
    );
};

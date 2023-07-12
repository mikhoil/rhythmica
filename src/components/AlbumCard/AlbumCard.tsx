import defaulAlbum from '../../assets/defaultAlbum.svg';
import heart from '../../assets/heart.svg';
import playCircle from '../../assets/playCircle.svg';
import styles from './AlbumCard.module.scss';

export const AlbumCard = () => {
    return (
        <div className={styles.container}>
            <img src={defaulAlbum} alt="" />
            <div className={styles.icons}>
                <img src={playCircle} alt="" />
                <img src={heart} alt="" />
            </div>
            <div>
                <h1 className="text-base font-bold">Название альбома</h1>
                <h2>Имя исполнителя</h2>
                <h3>2023 &bull; Альбом</h3>
            </div>
        </div>
    );
};

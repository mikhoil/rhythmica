import styles from './CreatePlayListCard.module.scss';
import defaultAlbum from '../../assets/defaultAlbum.svg';
import add from '../../assets/add.svg';

export const CreatePlayListCard = () => {
    return (
        <div className={styles.container}>
            <img src={defaultAlbum} className={styles.playlist} alt="" />
            <img src={add} className={styles.add} width={60} alt="" />
            <h1 className="text-base font-bold text-center mt-2">
                Создать плейлист
            </h1>
        </div>
    );
};

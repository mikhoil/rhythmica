import heart from '../../assets/heart.svg';
import add from '../../assets/add.svg';
import styles from './Track.module.scss';
import trackHover from '../../assets/trackHover.svg';
import { FC } from 'react';

export const Track: FC<{ title?: string }> = ({ title = 'Название трека' }) => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <button className="rounded-[15px] bg-[#d9d9d9] w-[50px] h-[50px] mx-[15px] flex">
                    <img
                        src={trackHover}
                        className={styles.trackHover}
                        alt=""
                    />
                </button>
                <div>
                    <h1 className={styles.track}>{title}</h1>
                    <h2 className={styles.group}>Название исполнителя</h2>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.actions}>
                    <button>
                        <img src={heart} alt="" width={25} />
                    </button>
                    <button>
                        <img src={add} alt="" width={25} />
                    </button>
                </div>
                <div className={styles.time}>3:55</div>
            </div>
        </div>
    );
};

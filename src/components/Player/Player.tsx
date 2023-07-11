import prev from '../../assets/prev.svg';
import play from '../../assets/play.svg';
import next from '../../assets/next.svg';
import outlinedHeart from '../../assets/outlinedHeart.svg';
import add from '../../assets/add.svg';
import close from '../../assets/close.svg';
import volume from '../../assets/volume.svg';
import styles from './Player.module.scss';

export const Player = () => {
    return (
        <div className={styles.container}>
            <div className={styles.scrollbar}>
                <div className={styles.blue}></div>
                <div className={styles.white}></div>
            </div>
            <div className={styles.trackbar}>
                <div className={styles.playback}>
                    <button>
                        <img src={prev} alt="" />
                    </button>
                    <button>
                        <img src={play} alt="" />
                    </button>
                    <button>
                        <img src={next} alt="" />
                    </button>
                </div>
                <div className={styles.info}>
                    <div className={styles.img} />
                    <div>
                        <p className={styles.track}>Название трека</p>
                        <p className={styles.group}>Название группы</p>
                    </div>
                </div>
                <div className={styles.actions}>
                    <button>
                        <img src={outlinedHeart} alt="" />
                    </button>
                    <button>
                        <img src={add} alt="" />
                    </button>
                    <button>
                        <img src={close} alt="" />
                    </button>
                </div>
                <div className={styles.volume}>
                    <button>
                        <img src={volume} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

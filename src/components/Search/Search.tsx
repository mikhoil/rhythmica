import search from '../../assets/search.svg';
import styles from './Search.module.scss';

export const Search = () => {
    return (
        <div className={styles.search}>
            <input
                type="search"
                placeholder="Трек, исполнитель"
                className={styles.input}
            />
            <button>
                <img src={search} alt="" />
            </button>
        </div>
    );
};

import genreStub from "../../assets/genreStub.jpg"
import styles from "./GenreButton.module.scss"

function GenreButton(props) {
    return <div className={styles.genreButton}>
        <img className={styles.genreImg} src={genreStub} />
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
        <div className={styles.genreName}>{props.name}</div>
    </div>
}

export default GenreButton;
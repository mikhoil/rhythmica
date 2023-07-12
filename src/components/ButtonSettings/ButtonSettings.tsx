import styles from "./ButtonSettings.module.scss"
import SetLogo from "../../assets/setLogo.svg"


function ButtonSettings(props) {

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
    return <div className={styles.buttonSettings} onClick={() => props.setSettings(!props.settings)}>
        <img className={styles.buttonSettingsLogo} src={SetLogo} />
        <div className={styles.buttonSettingsName}>Настроить</div>
    </div>
}

export default ButtonSettings
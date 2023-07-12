import "./ButtonWave.scss"
import Play from "../../assets/play.svg"


function ButtonWave() {
    return <div className="button-wave">
        <img className="button-wave-play" src={Play} />
        <div className="button-wave-name">Моя волна</div>
    </div>
}

export default ButtonWave;
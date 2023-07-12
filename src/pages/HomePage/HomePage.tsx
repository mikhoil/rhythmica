import "./HomePage.css";
import ButtonWave from "../../components/ButtonWave/ButtonWave";
import ButtonSettings from "../../components/ButtonSettings/ButtonSettings";
import {useState} from "react";
import GenreButton from "../../components/GenreButton/GenreButton";
import add from "../../assets/add.svg"


export const HomePage = () => {

    const [isWave,setIsWave] = useState(true);
    const [isSettings, setSettings] = useState(false);

    const tags = []

    function changeTab(name:string){
        if (name === "волна" && !isWave){
            setIsWave( !isWave )
        }

        if (name === "жанры" && isWave){
            setIsWave( !isWave )
        }
    }

    function genreTab(){
        changeTab( "жанры" )
        setSettings(false)
    }

    return <div>
        <div className="main-body-background">
            <div className="main-body">
                <div className="main-body-leftside">
                    <div className="main-body-leftside-headline"> Главная </div>
                    <div className="main-body-leftside-tabs">
                        <div onClick={() => changeTab( "волна" ) } className={`main-tab ${isWave? "main-current-tab":""}`}>Волна</div>
                        <div onClick={genreTab } className={`main-tab ${!isWave? "main-current-tab":""}`}>Жанры</div>
                    </div>
                    {isWave ?<div className="main-button-wave">
                        <ButtonWave />
                        <ButtonSettings settings={isSettings} setSettings={setSettings}/>
                    </div> :
                        <div className="main-body-genre">
                            <GenreButton name="Рок" />
                            <GenreButton name="Рэп" />
                            <GenreButton name="Танцевальная" />
                            <GenreButton name="Поп" />
                            <GenreButton name="Метал" />
                            <GenreButton name="Джаз" />
                            <GenreButton name="Альтернатива" />
                        </div>}

                </div>
                <div className="main-body-rightside">
                    {isSettings? <div className="block-settings">
                        <div className="block-tag-input">
                            <input

                                placeholder="Введите тег"
                                className="tag-input"
                            ></input>
                            <button>
                                <img className="tag-add" src={add}  alt=""/>
                            </button>
                        </div>
                    </div>:<></>}
                </div>
            </div>
        </div>
    </div>;
};

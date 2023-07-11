import prev from '../../assets/prev.svg';
import play from '../../assets/play.svg';
import next from '../../assets/next.svg';
import outlinedHeart from '../../assets/outlinedHeart.svg';
import add from '../../assets/add.svg';
import close from '../../assets/close.svg';
import volume from '../../assets/volume.svg';

export const Player = () => {
    return (
        <div className="fixed w-full bottom-0">
            <div className="flex h-3.5">
                <div className="bg-[#2771ff] w-1/4"></div>
                <div className="bg-[#d1d1d1] w-full"></div>
            </div>
            <div className="flex h-[76px] bg-[#353535] pl-[34px] pr-[182px]">
                <div className="flex items-center justify-between w-[186px] mr-[60px]">
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
                <div className="flex items-center w-[235px] justify-between mr-[100px]">
                    <div className="w-[50px] h-[50px] bg-[#d1d1d1]" />
                    <div>
                        <p className="text-[22px]">Название трека</p>
                        <p className="text-base">Название группы</p>
                    </div>
                </div>
                <div className="flex items-center justify-between w-[166px] mr-[442px]">
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
                <div className="flex items-center">
                    <button>
                        <img src={volume} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

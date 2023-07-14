import styles from './ChooseAlbum.module.scss';
import arrowRight from '../../../assets/arrowRight.svg';
import { useContext } from 'react';
import { albums } from '../../../fakeData';
import {
    CreatePlayListContext,
    CreatePlayListFormScreen,
} from '../../CreatePlayListCard/CreatePlayListCard';

export const ChooseAlbums = () => {
    const [[, setScreen], [, setAlbumId]] = useContext(CreatePlayListContext);
    return (
        <ul className={styles.content}>
            <div>
                {albums.map(({ id, title }) => (
                    <li key={id}>
                        <button
                            onClick={event => {
                                event.preventDefault();
                                setAlbumId(id);
                                setScreen(
                                    CreatePlayListFormScreen.ADD_TRACKS_FROM_ALBUM,
                                );
                            }}
                            className="w-[370px] h-10 border-b border-[#d9d9d9] ml-[30px] flex justify-between items-center hover:bg-[#707070]"
                        >
                            <h1 className="text-start pl-8">{title}</h1>
                            <img src={arrowRight} alt="" />
                        </button>
                    </li>
                ))}
            </div>
            <hr className="text-[#d9d9d9] w-[full]" />
        </ul>
    );
};

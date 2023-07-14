import styles from './CreatePlayListCard.module.scss';
import defaultAlbum from '../../assets/defaultAlbum.svg';
import add from '../../assets/add.svg';
import modalCross from '../../assets/modalCross.svg';
import back from '../../assets/back.svg';
import { useContext, useState } from 'react';
import { Modal } from 'antd';
import { createContext } from 'react';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';
import { CreatePlayListForm } from '../CreatePlayList/CreatePlayListForm/CreatePlayListForm';
import { AddTracks } from '../CreatePlayList/AddTracks/AddTracks';
import { ChooseAlbums } from '../CreatePlayList/ChooseAlbums/ChooseAlbums';
import { AddTracksFromAlbum } from '../CreatePlayList/AddTracksFromAlbum/AddTracksFromAlbum';
import './CreatePlayListCard.scss';

export enum CreatePlayListFormScreen {
    ADD_PLAYLIST,
    ADD_TRACKS,
    CHOOSE_ALBUM,
    ADD_TRACKS_FROM_ALBUM,
}

export const CreatePlayListContext = createContext<
    [
        [
            CreatePlayListFormScreen,
            Dispatch<SetStateAction<CreatePlayListFormScreen>>,
        ],
        [number, Dispatch<SetStateAction<number>>],
        [boolean, Dispatch<SetStateAction<boolean>>],
    ]
>(undefined!);

const ModalContent = () => {
    const [[screen], [albumId]] = useContext(CreatePlayListContext);

    return screen === CreatePlayListFormScreen.ADD_PLAYLIST ? (
        <CreatePlayListForm />
    ) : screen === CreatePlayListFormScreen.ADD_TRACKS ? (
        <AddTracks />
    ) : screen === CreatePlayListFormScreen.CHOOSE_ALBUM ? (
        <ChooseAlbums />
    ) : (
        <AddTracksFromAlbum albumId={albumId} />
    );
};

export const CreatePlayListCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [screen, setScreen] = useState<CreatePlayListFormScreen>(
        CreatePlayListFormScreen.ADD_PLAYLIST,
    );
    const [albumId, setAlbumId] = useState(0);

    return (
        <>
            <button
                className={styles.container}
                onClick={() => setIsOpen(true)}
            >
                <img src={defaultAlbum} className={styles.playlist} alt="" />
                <img src={add} className={styles.add} width={60} alt="" />
                <h1 className="text-base font-bold text-center mt-2">
                    Создать плейлист
                </h1>
            </button>
            <CreatePlayListContext.Provider
                value={[
                    [screen, setScreen],
                    [albumId, setAlbumId],
                    [isOpen, setIsOpen],
                ]}
            >
                <Modal
                    width={450}
                    style={{ top: 10 }}
                    closeIcon={<img src={modalCross} alt="" />}
                    className="modal"
                    title={
                        screen === CreatePlayListFormScreen.ADD_PLAYLIST ? (
                            'Создание нового плейлиста'
                        ) : (
                            <button
                                className="h-[49px] w-[130px] -ml-[30px] bg-[#646464] flex items-center text-base font-normal pl-[10px] rounded-ss-[15px] hover:bg-[#707070]"
                                onClick={() => {
                                    if (
                                        screen ===
                                        CreatePlayListFormScreen.ADD_TRACKS
                                    )
                                        setScreen(
                                            CreatePlayListFormScreen.ADD_PLAYLIST,
                                        );
                                    else if (
                                        screen ===
                                        CreatePlayListFormScreen.CHOOSE_ALBUM
                                    )
                                        setScreen(
                                            CreatePlayListFormScreen.ADD_TRACKS,
                                        );
                                    else
                                        setScreen(
                                            CreatePlayListFormScreen.CHOOSE_ALBUM,
                                        );
                                }}
                            >
                                <img src={back} alt="" className="mr-[10px]" />
                                Назад
                            </button>
                        )
                    }
                    footer={null}
                    open={isOpen}
                    onCancel={() => setIsOpen(false)}
                >
                    <ModalContent />
                </Modal>
            </CreatePlayListContext.Provider>
        </>
    );
};

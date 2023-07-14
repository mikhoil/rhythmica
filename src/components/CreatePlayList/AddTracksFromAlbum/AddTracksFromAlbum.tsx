import styles from './AddTracksFromAlbum.module.scss';
import { FC, useContext } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { albums } from '../../../fakeData';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { ITrack } from '../../../interfaces/track';
import { setTracksFromAlbum } from '../../../store/slices/createPlayListSlice';
import {
    CreatePlayListContext,
    CreatePlayListFormScreen,
} from '../../CreatePlayListCard/CreatePlayListCard';
import { MiniTrack } from '../CreatePlayListForm/CreatePlayListForm';

interface IAddTracksFromAlbumFormData {
    tracks: (ITrack & { checked: boolean })[];
}

export const AddTracksFromAlbum: FC<{ albumId: number }> = ({ albumId }) => {
    const [[, setScreen], [, setAlbumId]] = useContext(CreatePlayListContext);

    const tracksFromAlbums = useAppSelector(
        state => state.createPlayListReducer.tracksFromAlbums,
    );
    const dispatch = useAppDispatch();

    const { register, handleSubmit, control } =
        useForm<IAddTracksFromAlbumFormData>({
            defaultValues: {
                tracks: albums
                    .find(album => album.id === albumId)
                    ?.tracks.map(track => ({
                        ...track,
                        checked: tracksFromAlbums[albumId]?.some(
                            chosenTrack =>
                                chosenTrack.trackId === track.trackId,
                        ),
                    })),
            },
        });
    const { fields } = useFieldArray({
        control,
        name: 'tracks',
    });
    const onSubmit: SubmitHandler<IAddTracksFromAlbumFormData> = (
        { tracks },
        event,
    ) => {
        event?.preventDefault();
        dispatch(
            setTracksFromAlbum({
                id: albumId,
                tracks: tracks.filter(({ checked }) => checked),
            }),
        );
        setScreen(CreatePlayListFormScreen.ADD_PLAYLIST);
        setAlbumId(null!);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul className={styles.content}>
                {fields.map(({ id, title, checked }, index) => (
                    <li key={id}>
                        <label className={styles.track}>
                            <MiniTrack title={title} canHovered={false} />
                            <input
                                type="checkbox"
                                {...register(`tracks.${index}.checked`)}
                                defaultChecked={checked}
                                className={styles.checkbox}
                            />
                            <div className={styles.checkmark} />
                        </label>
                    </li>
                ))}
            </ul>
            <div className="w-full h-[50px] border-t-[1px] border-[#d9d9d9] flex items-center justify-end pr-5">
                <button className="h-[30px] bg-[#646464] text-[#ffffff] rounded-[10px] text-base px-6 border-transparent border-2 hover:border-[#d9d9d9] hover:bg-[#707070]">
                    Сохранить
                </button>
            </div>{' '}
        </form>
    );
};

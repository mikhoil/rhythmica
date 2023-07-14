import styles from './AddTracks.module.scss';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { trackList } from '../../../fakeData';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { ITrack } from '../../../interfaces/track';
import { setTracks } from '../../../store/slices/createPlayListSlice';
import { useContext } from 'react';
import {
    CreatePlayListContext,
    CreatePlayListFormScreen,
} from '../../CreatePlayListCard/CreatePlayListCard';
import add from '../../../assets/add.svg';
import { MiniTrack } from '../CreatePlayListForm/CreatePlayListForm';

interface IAddTrackFormData {
    tracks: (ITrack & { checked: boolean })[];
}

export const AddTracks = () => {
    const chosenTracks = useAppSelector(
        state => state.createPlayListReducer.tracks,
    );
    const dispatch = useAppDispatch();

    const { register, handleSubmit, control } = useForm<IAddTrackFormData>({
        defaultValues: {
            tracks: trackList.map(track => ({
                ...track,
                checked: chosenTracks.some(
                    chosenTrack => chosenTrack.trackId === track.trackId,
                ),
            })),
        },
    });
    const { fields } = useFieldArray({
        control,
        name: 'tracks',
    });

    const onSubmit: SubmitHandler<IAddTrackFormData> = ({ tracks }, event) => {
        event?.preventDefault();
        dispatch(
            setTracks({ tracks: tracks.filter(({ checked }) => checked) }),
        );
        setScreen(CreatePlayListFormScreen.ADD_PLAYLIST);
    };

    const [[, setScreen]] = useContext(CreatePlayListContext);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <button
                type="button"
                onClick={() => setScreen(CreatePlayListFormScreen.CHOOSE_ALBUM)}
                className="w-full h-[49px] pl-[30px] flex items-center bg-[#646464] text-[#ffffff] border-b-2 border-t-[1px] hover:bg-[#707070]"
            >
                <img src={add} width={20} className="mr-5" alt="" />
                Выбрать из альбомов
            </button>
            <div className={styles.content}>
                <ul>
                    {fields.map(({ title, id, checked }, index) => (
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
            </div>
            <div className="w-full h-[50px] border-t-[1px] border-[#d9d9d9] flex items-center justify-end pr-5">
                <button className="h-[30px] bg-[#646464] text-[#ffffff] rounded-[10px] text-base px-6 border-transparent border-2 hover:border-[#d9d9d9] hover:bg-[#707070]">
                    Сохранить
                </button>
            </div>
        </form>
    );
};

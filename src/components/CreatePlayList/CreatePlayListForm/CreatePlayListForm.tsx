import styles from './CreatePlayListForm.module.scss';
import { FC, ReactNode, useContext, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
    ICreatePlayListState,
    setDescription,
    setImg,
    setTitle,
} from '../../../store/slices/createPlayListSlice';
import {
    CreatePlayListContext,
    CreatePlayListFormScreen,
} from '../../CreatePlayListCard/CreatePlayListCard';
import { SubmitHandler, useForm } from 'react-hook-form';
import add from '../../../assets/add.svg';
import playCircle from '../../../assets/playCircle.svg';

type AddPlayListData = ICreatePlayListState;

export const MiniTrack: FC<{ title: string; canHovered?: boolean }> = ({
    title,
    canHovered = true,
}) => {
    return (
        <div
            className={`w-[370px] h-[40px] flex items-center pl-3 rounded-[10px] ${
                canHovered ? 'hover:bg-[#646464]' : ''
            }`}
        >
            <img src={playCircle} width={20} alt="" />
            <p className="w-[248px] ml-[10px]">Имя исполнителя - {title}</p>
            <p className="mr-[22px]">3:55</p>
            {/* <button className="text-xl text-red-500 font-extrabold">
                &times;
            </button> */}
        </div>
    );
};

export const CreatePlayListForm = () => {
    const playListStore = useAppSelector(state => state.createPlayListReducer);
    const { title, description, img, tracks, tracksFromAlbums } = playListStore;
    const dispatch = useAppDispatch();

    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const pickImgRef = useRef<HTMLInputElement>(null);
    const cancelPickImgRef = useRef<HTMLButtonElement>(null);

    interface Event<T = EventTarget> {
        target: T;
    }

    const [[, setScreen], , [, setIsOpen]] = useContext(CreatePlayListContext);

    const [isFileUploaded, setIsFileUploaded] = useState(!!img);

    const { resetField, handleSubmit, getValues, setValue } =
        useForm<AddPlayListData>({ defaultValues: playListStore });
    const handleChange = (e: Event<HTMLInputElement>) => {
        console.log(e.target.files, img);
        setValue('img', e.target.files?.[0]!);
        setIsFileUploaded(true);
    };
    const onSubmit: SubmitHandler<AddPlayListData> = (data, e) => {
        e?.preventDefault();
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center p-0"
        >
            <div className="flex justify-between w-[390px] max-h-[200px] mx-[30px] my-[25px]">
                <div className="flex max-h-[100px]">
                    {!isFileUploaded ? (
                        <button
                            type="button"
                            onClick={() => pickImgRef.current?.click()}
                            className="flex flex-col items-center w-[100px] h-[100px] bg-[#646464] pt-[37px] border-2 border-transparent hover:border-[#d9d9d9] hover:bg-[#707070]"
                        >
                            <img src={add} width={25} alt="" />
                            <span className="text-[#ffffff] mt-2">Обложка</span>
                        </button>
                    ) : (
                        <div className="flex">
                            <img
                                src={URL.createObjectURL(
                                    getValues('img') ?? '',
                                )}
                                ref={imgRef}
                                width={100}
                                alt=""
                            />
                            <button
                                type="button"
                                ref={cancelPickImgRef}
                                onClick={() => {
                                    setIsFileUploaded(false);
                                    resetField('img');
                                    pickImgRef.current!.value = null!;
                                }}
                                className="font-extrabold text-2xl text-red-500 self-start relative right-5 bottom-2"
                            >
                                &times;
                            </button>
                        </div>
                    )}
                    <input
                        type="file"
                        ref={pickImgRef}
                        accept="image/*,.png,.jpg,.gif,.web"
                        onChange={handleChange}
                        className="w-0 h-0 m-0 p-0 opacity-0 overflow-hidden"
                    />
                </div>
                <div className="flex flex-col text-[#ffffff]">
                    <input
                        type="text"
                        defaultValue={title}
                        ref={titleRef}
                        placeholder="Название плейлиста"
                        className="bg-[#646464] w-[270px] h-10 rounded-[5px] p-[10px] text-base mb-5"
                    />
                    <textarea
                        ref={descriptionRef}
                        cols={30}
                        rows={30}
                        placeholder="Описание плейлиста"
                        defaultValue={description}
                        className="bg-[#646464] rounded-[5px] text-base p-[10px] resize-none"
                    />
                </div>
            </div>
            <button
                type="button"
                className="flex items-center w-full text-base text-[#ffffff] bg-[#646464] h-[49px] border-y-[2px] border-transparent  hover:border-[#d9d9d9] hover:bg-[#707070]"
                onClick={() => {
                    dispatch(
                        setTitle({ title: titleRef.current?.value ?? '' }),
                    );
                    dispatch(
                        setDescription({
                            description: descriptionRef.current?.value ?? '',
                        }),
                    );
                    dispatch(setImg({ img: getValues('img')! }));
                    setScreen(CreatePlayListFormScreen.ADD_TRACKS);
                }}
            >
                <img
                    src={add}
                    width={20}
                    alt=""
                    className="ml-[30px] mr-[21px]"
                />
                Добавить треки
            </button>
            <div className={styles.content}>
                {tracks.length ? (
                    <ul>
                        {tracks.map(({ trackId, title }) => (
                            <li key={trackId}>
                                <MiniTrack title={title} />
                            </li>
                        ))}
                        {Object.values(tracksFromAlbums)
                            .flat()
                            .map(({ title, trackId }) => (
                                <li key={trackId}>
                                    <MiniTrack title={title} />
                                </li>
                            ))}
                    </ul>
                ) : (
                    <div className="m-auto">Здесь пока нет треков</div>
                )}
            </div>
            <div className="w-full h-[50px] border-t-[1px] border-[#d9d9d9] flex items-center justify-end pr-5">
                <button
                    onClick={() => setIsOpen(false)}
                    className="h-[30px] bg-[#646464] text-[#ffffff] rounded-[10px] text-base px-6 border-transparent border-2 hover:border-[#d9d9d9] hover:bg-[#707070]"
                >
                    Добавить плейлист
                </button>
            </div>
        </form>
    );
};

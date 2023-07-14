import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITrack } from '../../interfaces/track';

export interface ICreatePlayListState {
    title: string;
    description: string;
    img: File;
    tracks: ITrack[];
    tracksFromAlbums: { [id: number]: ITrack[] };
}

const initialState: ICreatePlayListState = {
    title: '',
    description: '',
    img: null!,
    tracks: [],
    tracksFromAlbums: [],
};

const createPlayListSlice = createSlice({
    name: 'createPlayList',
    initialState,
    reducers: {
        setTitle(
            state,
            { payload: { title } }: PayloadAction<{ title: string }>,
        ) {
            state.title = title;
        },

        setDescription(
            state,
            {
                payload: { description },
            }: PayloadAction<{ description: string }>,
        ) {
            state.description = description;
        },

        setImg(state, { payload: { img } }: PayloadAction<{ img: File }>) {
            state.img = img;
        },

        setTracks(
            state,
            { payload: { tracks } }: PayloadAction<{ tracks: ITrack[] }>,
        ) {
            state.tracks = tracks;
        },

        setTracksFromAlbum(
            state,
            {
                payload: { id, tracks },
            }: PayloadAction<{ id: number; tracks: ITrack[] }>,
        ) {
            state.tracksFromAlbums[id] = tracks;
        },
    },
});

export default createPlayListSlice.reducer;

export const {
    setTracks,
    setTracksFromAlbum,
    setDescription,
    setImg,
    setTitle,
} = createPlayListSlice.actions;

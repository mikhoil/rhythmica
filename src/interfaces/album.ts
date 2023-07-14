import { ITrack } from './track';

export interface IAlbum {
    id: number;
    title: string;
    tracks: ITrack[];
}

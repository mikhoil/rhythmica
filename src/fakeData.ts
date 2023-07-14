import { IAlbum } from './interfaces/album';
import { ITrack } from './interfaces/track';

export const trackList: ITrack[] = [
    { trackId: 0, title: 'Трек 1' },
    { trackId: 1, title: 'Трек 2' },
    { trackId: 2, title: 'Трек 3' },
    { trackId: 3, title: 'Трек 4' },
    { trackId: 4, title: 'Трек 5' },
    { trackId: 5, title: 'Трек 6' },
    { trackId: 6, title: 'Трек 7' },
    { trackId: 7, title: 'Трек 8' },
    { trackId: 8, title: 'Трек 9' },
    { trackId: 9, title: 'Трек 10' },
    { trackId: 10, title: 'Трек 11' },
    { trackId: 11, title: 'Трек 12' },
    { trackId: 12, title: 'Трек 13' },
    { trackId: 13, title: 'Трек 14' },
    { trackId: 14, title: 'Трек 15' },
    { trackId: 15, title: 'Трек 16' },
    { trackId: 16, title: 'Трек 17' },
];

export const albums: IAlbum[] = [
    {
        id: 0,
        title: 'Альбом 1',
        tracks: [
            { trackId: 2, title: 'Трек 3' },
            { trackId: 3, title: 'Трек 4' },
            { trackId: 4, title: 'Трек 5' },
        ],
    },
    {
        id: 1,
        title: 'Альбом 2',
        tracks: [
            { trackId: 6, title: 'Трек 7' },
            { trackId: 7, title: 'Трек 8' },
            { trackId: 8, title: 'Трек 9' },
        ],
    },
    {
        id: 2,
        title: 'Альбом 3',
        tracks: [
            { trackId: 10, title: 'Трек 11' },
            { trackId: 11, title: 'Трек 12' },
            { trackId: 12, title: 'Трек 13' },
        ],
    },
];

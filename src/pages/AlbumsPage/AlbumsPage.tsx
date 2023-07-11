import { AlbumCard } from '../../components/AlbumCard/AlbumCard';

const AlbumsPage = () => {
    return (
        <>
            <h1 className="h-[55px] text-[22px]">Альбомы</h1>
            <div className="grid grid-cols-5 gap-10">
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
            </div>
        </>
    );
};

export default AlbumsPage;

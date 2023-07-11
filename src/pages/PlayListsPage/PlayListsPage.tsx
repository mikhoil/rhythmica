import { CreatePlayListCard } from '../../components/CreatePlayListCard/CreatePlayListCard';
import { PlayListCard } from '../../components/PlayListCard/PlayListCard';

const PlayListsPage = () => {
    return (
        <>
            <h1 className="text-[22px] h-[55px]">Плейлисты</h1>
            <div className="grid grid-cols-5 gap-10">
                <CreatePlayListCard />
                <PlayListCard />
                <PlayListCard />
                <PlayListCard />
                <PlayListCard />
                <PlayListCard />
                <PlayListCard />
                <PlayListCard />
                <PlayListCard />
                <PlayListCard />
                <PlayListCard />
            </div>
        </>
    );
};

export default PlayListsPage;

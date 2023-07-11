import { AuthorCard } from '../../components/AuthorCard/AuthorCard';

const SubscriptionsPage = () => {
    return (
        <>
            <h1 className="text-[22px] h-[45px]">Подписки</h1>
            <div className="grid grid-cols-5 gap-10">
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
            </div>
        </>
    );
};

export default SubscriptionsPage;

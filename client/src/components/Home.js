import { useFetchCampingsQuery } from '../store';
import CampingListPage from '../pages/CampingListPage';
import Skeleton from './Skeleton';

function Home() {
	const { data: campingData, error, isLoading } = useFetchCampingsQuery();
	let content;

	if (isLoading) {
		content = (
			<Skeleton
				times={3}
				className='h-10 w-full'
			/>
		);
	} else if (error) {
		content = <div>Error loading camping data</div>;
	} else {
		content = (
			<>
				<div>
					<h1 className='text-center p-4 text-4xl w-full h-full m-0 bg-green-400'>
						Go Camping Site Info
					</h1>
				</div>
				<CampingListPage campingData={campingData} />
			</>
		);
	}

	return <> {content}</>;
}

export default Home;

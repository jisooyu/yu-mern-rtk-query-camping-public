import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

export default function CampingListDetail({ campingData }) {
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const handleClick = (nextIndex) => {
		nextIndex === expandedIndex
			? setExpandedIndex(-1)
			: setExpandedIndex(nextIndex);
	};

	const renderedItems = campingData.map((item, index) => {
		const isExpanded = expandedIndex === index;
		const icon = (
			<span className='text-2xl'>
				{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
			</span>
		);
		return (
			<div key={item.contentId}>
				<div
					className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer'
					onClick={() => handleClick(index)}
				>
					{item.facltNm}
					{icon}
				</div>
				{isExpanded && (
					<div className='border-b p-5'>
						{item.lineIntro}
						<img
							loading='lazy'
							src={item.firstImageUrl || 'no-image-available.jpeg'}
							alt='campingPicture'
						/>
						<a
							className='text-black 
											underline text-xs hover:text-red-500 '
							href={item.homepage}
						>
							Home Page Link
						</a>
						<p>캠핑장 주소:{item.addr1}</p>
						<p>펫입장여부:{item.animalCmgCl}</p>
					</div>
				)}
			</div>
		);
	});
	return <div className='border-x border-t rounded'>{renderedItems}</div>;
}

import { triviaData } from '../triviaData';
import infoIcon from '../assets/info-icon-svgrepo-com.svg';
import { useState } from 'react';

function Home() {
	const [showInfo, setShowInfo] = useState(false);
	const [seletedCategory, setSelectedCategory] = useState('');

	return (
		<div className='home-container'>
			<div>
				<div className='home-box'>
					{!showInfo && (
						<>
							<img
								src={infoIcon}
								alt='how-to-play icon'
								className='info-icon'
								onClick={() => setShowInfo(!showInfo)}
							/>
							<h1 className='home-title'>Mind Mystery Riddles</h1>
							<div className=''>
								<p className='home-subtitle'>Choose a category:</p>
								<div className='category-choices'>
									{triviaData.map((cat, index) => (
										<p
											key={index}
											className='category-choice'
											onClick={() => setSelectedCategory(cat.category)}
										>
											{cat.category}
										</p>
									))}
								</div>
							</div>
						</>
					)}
					{showInfo && (
						<>
							<div className='info-head'>
								<button onClick={() => setShowInfo(!showInfo)}>Back</button>
								<img
									src={infoIcon}
									alt='how-to-play icon'
									className='info-icon'
								/>
							</div>
							<h1 className='home-title'>How to Play</h1>
							<div className=''>
								<p className=''>1. Choose a category</p>
								<p className=''>
									2. Agree to the chosen category by presssing Start
								</p>
								<p className=''>3. </p>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default Home;

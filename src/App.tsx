import { triviaData } from './triviaData';
import infoIcon from './assets/info-icon-svgrepo-com.svg';
import { useState } from 'react';
import HowToPlay from './components/HowToPlay';
import Game from './components/Game';
import './App.css';

function App() {
	const [showInfo, setShowInfo] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState('');
	const [showGame, setShowGame] = useState(false);
	const [hideGameOptions, setHideGameOptions] = useState(false);

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
							{!hideGameOptions && (
								<div className=''>
									<p className='home-subtitle'>Choose a category:</p>
									<div className='category-choices'>
										{triviaData.map((cat, index) => (
											<p
												key={index}
												className='category-choice'
												onClick={() => {
													setSelectedCategory(cat.category);
													setHideGameOptions(true);
													setShowGame(true);
												}}
											>
												{cat.category}
											</p>
										))}
									</div>
								</div>
							)}
						</>
					)}
					{showInfo && (
						<HowToPlay showInfo={showInfo} setShowInfo={setShowInfo} />
					)}

					{showGame && <Game selectedCategory={selectedCategory} />}
				</div>
			</div>
		</div>
	);
}

export default App;

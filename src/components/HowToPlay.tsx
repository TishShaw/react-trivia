import infoIcon from '../assets/info-icon-svgrepo-com.svg';

interface Props {
	showInfo: boolean;
	setShowInfo: (show: boolean) => void;
}

function HowToPlay({ showInfo, setShowInfo }: Props) {
	return (
		<div className='info-container'>
			<div className='info-head'>
				<button onClick={() => setShowInfo(!showInfo)}>Back</button>
				<img src={infoIcon} alt='how-to-play icon' className='info-icon' />
			</div>
			<h1 className='home-title'>How to Play</h1>
			<div className='how-to-play-content'>
				<p>1.) Choose a trivia category.</p>

				<p>
					2.) Answer each question by selecting the correct answer. You can only
					select one answer for each question. Each question is worth 10 points.
				</p>
				<p>
					3.) The maximum amount of points achievable is 10 times the number of
					questions.
				</p>
				<p>
					4.) Complete all the questions to achieve the highest amount of
					points.
				</p>
			</div>
		</div>
	);
}

export default HowToPlay;

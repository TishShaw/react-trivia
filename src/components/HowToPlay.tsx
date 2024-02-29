import infoIcon from '../assets/info-icon-svgrepo-com.svg';

interface Props {
	showInfo: boolean;
	setShowInfo: (string: boolean) => void;
}
function HowToPlay({ showInfo, setShowInfo }: Props) {
	return (
		<>
			<div className='info-head'>
				<button onClick={() => setShowInfo(!showInfo)}>Back</button>
				<img src={infoIcon} alt='how-to-play icon' className='info-icon' />
			</div>
			<h1 className='home-title'>How to Play</h1>
			<div className=''>
				<p className=''>1. Choose a category</p>
				<p className=''>2. Agree to the chosen category by presssing Start</p>
				<p className=''>3. </p>
			</div>
		</>
	);
}

export default HowToPlay;

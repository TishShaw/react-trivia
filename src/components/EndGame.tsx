interface Props {
	score: number;
	setScore: (score: number) => void;
	setShowEndGame: (show: boolean) => void;
	setHideGameOptions: (hide: boolean) => void;
	showInfo: boolean;
	highestScore: number;
}

function EndGame({
	score,
	setScore,
	setShowEndGame,
	setHideGameOptions,
	showInfo,
	highestScore,
}: Props) {
	const restartGame = () => {
		setShowEndGame(false);
		setHideGameOptions(false);
		setScore(0);
	};
	if (!showInfo)
		return (
			<div className='endGame-container'>
				<div className='endGame-container'>
					<p className='endGame-highScore'>Highest score: {highestScore}</p>
					<p className='endGame-score'> Your score: {score}</p>
				</div>
				<p onClick={restartGame} className='endGame-restart'>
					Play again
				</p>
			</div>
		);
}

export default EndGame;

interface Props {
	score: number;
	setScore: (score: number) => void;
	setShowEndGame: (show: boolean) => void;
	setHideGameOptions: (hide: boolean) => void;
}

function EndGame({
	score,
	setScore,
	setShowEndGame,
	setHideGameOptions,
}: Props) {
	const restartGame = () => {
		setShowEndGame(false);
		setHideGameOptions(false);
		setScore(0);
	};
	return (
		<div>
			<div>
				<p className=''>Highest score: 100</p>
				<p>Your score: {score}</p>
			</div>
			<p onClick={restartGame}>Play again</p>
		</div>
	);
}

export default EndGame;

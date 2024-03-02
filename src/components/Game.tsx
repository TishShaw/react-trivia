import { useState } from 'react';
import { triviaData } from '../triviaData';

interface GameProps {
	selectedCategory: string;
	setShowGame: (show: boolean) => void;
	setShowEndGame: (show: boolean) => void;
	setHideGameOptions: (hide: boolean) => void;
	setScore: (score: number) => void;
	score: number;
}

function Game({
	selectedCategory,
	setShowGame,
	setHideGameOptions,
	setShowEndGame,
	setScore,
	score,
}: GameProps) {
	const [idx, setIdx] = useState(0);

	const [selectedAnswer, setSelectedAnswer] = useState<String[]>([]);

	const currentQuestion = triviaData
		.filter((cat) => cat.category === selectedCategory)
		.flat();

	const handleNextQuestion = () => {
		const correctAnswer = currentQuestion[0]?.questions[idx]?.answer;
		const isCorrect = selectedAnswer.includes(correctAnswer);
		if (isCorrect) {
			setScore((prev: number) => prev + 10);
		}
		if (idx + 1 !== currentQuestion[0]?.questions?.length) {
			setIdx((prev) => prev + 1);
			setSelectedAnswer([]);
		} else {
			setShowGame(false);
			setShowEndGame(true);
		}
	};

	const handlePrevQuestion = () => {
		setIdx((prev) => prev - 1);
		if (idx - 1 !== 0 && idx === 0) {
			setHideGameOptions(false);
			setShowGame(false);
		}
	};

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = e.target;

		if (checked) {
			setSelectedAnswer([...selectedAnswer, value]);
		} else {
			setSelectedAnswer(selectedAnswer.filter((ans) => ans !== value));
		}
	};

	console.log(score);

	return (
		<div className='game-container'>
			<h1>{selectedCategory}</h1>
			<div className='game-questions-container'>
				<div className=''>
					<p className='game-question'>
						Q{idx + 1}.) {currentQuestion[0].questions[idx].question}
					</p>
					<div className='game-choices'>
						{currentQuestion[0]?.questions[idx]?.choices?.map(
							(choice, index) => (
								<div key={index}>
									<input
										type='checkbox'
										value={choice}
										onChange={handleCheckboxChange}
										checked={selectedAnswer.includes(choice)}
									/>
									<label>{choice}</label>
								</div>
							)
						)}
					</div>
				</div>
			</div>
			<div className='game-btn-container'>
				<button onClick={handlePrevQuestion}>
					{idx - 1 !== -1 ? 'Prev' : 'Exit'}
				</button>
				<p>
					{idx + 1} of {currentQuestion[0]?.questions?.length}
				</p>
				<button onClick={handleNextQuestion}>Next</button>
			</div>
		</div>
	);
}

export default Game;

import './App.css';
import { triviaData } from './triviaData';

function App() {
	return (
		<div className='home-container'>
			<div>
				<div className='home-box'>
					<h1 className='home-title'>Mind Mystery Riddles</h1>
					<div className=''>
						<p className='home-subtitle'>Choose a category:</p>
						<div className='category-choices'>
							{triviaData.map((cat, index) => (
								<p key={index} className='category-choice'>
									{cat.category}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

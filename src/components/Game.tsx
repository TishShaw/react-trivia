interface GameProps {
	selectedCategory: string;
}

function Game({ selectedCategory }: GameProps) {
	return <div>{selectedCategory}</div>;
}

export default Game;

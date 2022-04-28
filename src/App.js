import React, { useState, useReducer } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	const incrementer = () => {
		let newCount = count + 1; //0 +1
		setCount(newCount);
	};
	const decrementer = () => {
		let newCount = count - 1;
		setCount(newCount);
	};

	return (
		<div className='App'>
			<h1>Counter</h1>

			<div className='counter'>
				<button onClick={decrementer}>-</button>
				{count}
				<button onClick={incrementer}>+</button>
			</div>
		</div>
	);
}

export default App;

import { useState } from "react";
import "./Counter.css"
import CounterButton from "./CounterButton";

export default function Counter() {

	const [count, setCount] = useState(0);

	function incrementCounterFunction(by) {
		setCount(count + by);
		console.log("increment clicked");
	}

	function decrementCounterFunction(by) {
		var result = count - by;
		if (result < 0)
			result = 0;

		setCount(result);
		console.log("decrement clicked");
	}

	function resetCount() {
		setCount(0);
	}

	return (
		<div className="Counter">
			<CounterButton
				by={1}
				incrementCounterFunction={incrementCounterFunction}
				decrementCounterFunction={decrementCounterFunction}/>
			<CounterButton
				by={2}
				incrementCounterFunction={incrementCounterFunction}
				decrementCounterFunction={decrementCounterFunction}/>
			<CounterButton
				by={5}
				incrementCounterFunction={incrementCounterFunction}
				decrementCounterFunction={decrementCounterFunction}/>
			<span className="totalCount">{count}</span>
			<div>
				<button className="button resetButton" onClick={resetCount}>Reset</button>
			</div>
		</div>
	);
}



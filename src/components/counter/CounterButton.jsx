import PropTypes from 'prop-types';

export default function CounterButton({by, incrementCounterFunction, decrementCounterFunction}) {
	return (
		<div>
				<button className="button counterButton" onClick={() => incrementCounterFunction(by)} >
					+{by}
				</button>
				<button className="button counterButton" onClick={() => decrementCounterFunction(by)} >
					-{by}
				</button>
		</div>
	);
}


CounterButton.propTypes = {
	by : PropTypes.number,
}

CounterButton.defaultProps = {
	by : 1
}

import React from 'react';
// import { Greeter } from 'greeter';

interface ClockState {
	time: Date
}

interface IClockProps {
	name: string
}

class Clock extends React.Component<IClockProps, ClockState> {

	tick = () => {
		this.setState({
			time: new Date()
		});
	}

	componentWillMount = () => {
		this.tick();
	}

	componentDidMount = () => {
		setInterval(() => this.tick(), 1000);
	}

	render = () => {
		return (
			<div className="clock">
			{/* <Clocker name="asd" /> */}
				<div>Time {this.props.name}: {this.state.time.toLocaleTimeString()}</div>
			</div>
		);
	}
}

export default Clock;
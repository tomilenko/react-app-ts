import React from 'react';

interface I__component__State {}

interface I__component__Props {}

class __component__ extends React.Component<I__component__Props, I__component__State> {

	constructor(props: I__component__Props) {
		super(props)
		this.state = {};
	}

	componentWillMount = () => {}
	componentDidMount = () => {}

	render = () => {
		return (
			<div className="__component__">
				<h2>__component__</h2>
			</div>
		);
	}
}

export default __component__;
import * as React from 'react';

interface IButtonProps {
	label: string;
	className: string;
	onClick: () => void;
}

const Button: React.StatelessComponent<IButtonProps> = (props) => {
	return (
		<button type="button"
			className={props.className}
			onClick={props.onClick}
		>
			{props.label}
		</button>
	);
}
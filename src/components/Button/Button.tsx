import React from 'react';
import './Button.scss';

export type ThemePalette = 'primary' | 'secondary' | 'warn' | 'danger' | 'success';
export type ButtonSize = 'sm' | 'm' | 'lg';
export type ButtonVariant = 'default' | 'outline' | 'flat';

interface Props {
	theme?: ThemePalette;
	size?: ButtonSize;
	variant?: ButtonVariant;
	[x: string]: any;
	
}

const Button = (props:Props) => {
	const {theme = 'primary', size = 'm', variant = 'default', children='Button', ...otherProps} = props;
	return (
		<button {...otherProps} className={`button ${size} ${theme} ${variant}`}>
			{children}
		</button>
	);
};

export default Button;

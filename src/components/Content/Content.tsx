import React from 'react';
import './Content.scss';

interface Props {
	children?: any;
}

const Content = ({children}: Props) =>
	(
		<div className={`card-content-container`}>
			{children}
		</div>
	);

export default Content;

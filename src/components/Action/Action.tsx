import React from 'react';
import './Action.scss';

interface Props {
	align: ActionAlignment,
	children: any
}

export enum ActionAlignment {
	start = 'flex-start',
	middle = 'center',
	end = 'flex-end',
	even = 'space-evenly',
	between = 'space-between'
}

const Action = ({children, align}: Props) => (
	<div className={`action`} style={{justifyContent: align}}>
		{children}
	</div>
);

export default Action;

import React from 'react';
import './Header.scss';

const Header = ({title, subtitle, avatar}: Props) => {
	return (
		<div className={`header ${subtitle ? 'with-subtitle' : ''}`}>
			{avatar && <img src={avatar} alt='Avatar' className={'avatar'}/>}
			<div className='content'>
				<div className='title'>{title}</div>
				{subtitle && <div className={'subtitle'}>{subtitle}</div>}
			</div>
		</div>
	);
};

interface Props {
	title: string,
	subtitle?: string,
	avatar?: string
}

export default Header;

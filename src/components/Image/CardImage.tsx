import React from 'react';
import './CardImage.scss';

interface Props {
	src: string;
	alt: string;
	style: ImageStyle;
}

export enum ImageStyle {
	noSpace = 'no-space',
	space = 'space'
}

const CardImage = ({src, alt, style = ImageStyle.noSpace}: Props) => {
	return (
		<div className={`card-image-container ${style}`}>
			<img src={src} alt={alt} className={`card-image`}/>
		</div>
	);
};


export default CardImage;

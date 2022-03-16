import React from 'react';
import './Card.scss';
import CardImage, {Props as CardImageProps} from '../Image/CardImage';
import Header, {Props as HeaderProps} from '../Header/Header';
import Content, {Props as ContentProps} from '../Content/Content';
import Action, {Props as ActionProps} from '../Action/Action';
import Button, {Props as ButtonProps} from '../Button/Button';


interface CardProps {
	header: HeaderProps;
	cardImage: CardImageProps,
	content: ContentProps,
	action: ActionProps,
	button1: ButtonProps,
	button2: ButtonProps,
	order: CardOrder
}

type CardOrder = 'hica' | 'ihca';

const Card = ({cardImage, content, button1, button2, action, header, order}: CardProps) => {
	return (
		<div className='card'>{
			order === 'ihca' ?
				<>
					<CardImage {...cardImage}/>
					<Header {...header}/>
					<Content {...content}/>
					<Action {...action}>
						<Button {...button1}>Cancel</Button>
						<Button {...button2}>Save</Button>
					</Action>
				</>
				:
				<>
					<Header {...header}/>
					<CardImage {...cardImage}/>
					<Content {...content}/>
					<Action {...action}>
						<Button {...button1}>Cancel</Button>
						<Button {...button2}>Save</Button>
					</Action>
				</>}
		</div>
	);
};

export default Card;

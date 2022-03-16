import {ComponentMeta, ComponentStory} from '@storybook/react';
import Card from '../components/Card/Card';
import {ImageStyle} from '../components/Image/CardImage';
import {ActionAlignment} from '../components/Action/Action';

export default {
	title: 'Component/Card',
	component: Card
} as ComponentMeta<typeof Card>;

const template: ComponentStory<typeof Card> = args => <Card {...args}/>;

export const NormalCard = template.bind({});
NormalCard.args = {
	header: {title: 'Card Title'},
	cardImage: {src: 'https://source.unsplash.com/random', alt: 'Card Image', style: ImageStyle.noSpace},
	content: {children:'This is a really small content!'},
	action: {align: ActionAlignment.end},
	button1: {variant: 'outline', theme:'danger'}
};

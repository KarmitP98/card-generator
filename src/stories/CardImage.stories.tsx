import CardImage, {ImageStyle} from '../components/Image/CardImage';
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
	title: 'Component/Card Image',
	component: CardImage
} as ComponentMeta<typeof CardImage>;

const template: ComponentStory<typeof CardImage> = args => <CardImage {...args}/>;

export const Full_Size = template.bind({});
Full_Size.args = {
	src: 'https://source.unsplash.com/random',
	alt: 'Image',
	style: ImageStyle.noSpace
};

export const With_Space = template.bind({});
With_Space.args = {
	...Full_Size.args,
	style: ImageStyle.space
};

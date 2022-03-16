import Header from '../components/Header/Header';
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
	title: 'Component/Header',
	component: Header
} as ComponentMeta<typeof Header>;

const template: ComponentStory<typeof Header> = args => <Header {...args}/>;

export const Default_Header = template.bind({});
Default_Header.args = {
	title: 'Header Title',
	subtitle: 'Subtitle goes here',
	avatar: 'https://source.unsplash.com/random'
};

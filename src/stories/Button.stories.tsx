import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Button from '../components/Button/Button';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Component/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = ({children, ...args}) => <Button {...args} >{children}</Button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	theme: 'primary',
	size: 'm',
	variant:'flat',
	children: 'New Button'
};

// export const Secondary = Template.bind({});
// Secondary.args = {
// 	label: 'Button'
// };

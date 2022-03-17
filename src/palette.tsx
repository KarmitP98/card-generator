import React from 'react';
import {Category, Component, Palette, Variant} from '@react-buddy/ide-toolbox';

export default () => (
	<Palette>
		<Category name='Text'>
			<Component name='Hello message'>
				<Variant>
					<span> Hello, Create React Buddy App! </span>
				</Variant>
			</Component>
		</Category>
	</Palette>
);

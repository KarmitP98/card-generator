import React, {useState} from 'react';
import './App.scss';
import {DropResult} from 'react-beautiful-dnd';
import Header from './components/Header/Header';

function App() {
	
	const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
	
	const onDragEnd = (dropped: DropResult) => {
		if (!dropped.destination?.index)
			return;
		
		const updatedList = [...items];
		const [item] = updatedList.splice(dropped.source.index, 1);
		updatedList.splice(dropped.destination?.index, 0, item);
		setItems(updatedList);
	};
	
	return (
		<div className='App'>
			<div className='card'>
				<Header title={'Header Title'} avatar={' https://source.unsplash.com/random'}
				        subtitle={'Subtitle Goes Here'}
				/>
			</div>
			{/*<DragDropContext onDragEnd={onDragEnd}>*/}
			{/*	<Droppable droppableId={'drop-1'} direction={'vertical'}>*/}
			{/*		{(provided => (*/}
			{/*			<div {...provided.droppableProps} ref={provided.innerRef} className={'drop'}>*/}
			{/*				{*/}
			{/*					items.map((value, index) =>*/}
			{/*						<Draggable draggableId={value} index={index} key={value}>*/}
			{/*							{*/}
			{/*								(provided1 => (*/}
			{/*									<div {...provided1.draggableProps} {...provided1.dragHandleProps}*/}
			{/*									     ref={provided1.innerRef} className={'drag'}*/}
			{/*									>*/}
			{/*										{value}*/}
			{/*										*/}
			{/*									</div>*/}
			{/*								))*/}
			{/*							}*/}
			{/*						</Draggable>*/}
			{/*					)*/}
			{/*				}*/}
			{/*				{provided.placeholder}*/}
			{/*			</div>*/}
			{/*		))*/}
			{/*		}*/}
			{/*	</Droppable>*/}
			{/*</DragDropContext>*/}
		</div>
	);
}

export default App;

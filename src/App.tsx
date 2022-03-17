import React, {useState} from 'react';
import './App.scss';
import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd';
import Header from './components/Header/Header';
import CardImage, {ImageStyle} from './components/Image/CardImage';
import Action, {ActionAlignment} from './components/Action/Action';
import Content from './components/Content/Content';
import {LOREM_1_PARA} from './shared/constants';
import Button from './components/Button/Button';


function App() {
	
	const [cardSections, setCardSections] = useState(
		[
			{
				type: 'header', name: 'Header', component:
					<Header
						title={'Header Title'}
						avatar={' https://source.unsplash.com/random'}
						subtitle={'Subtitle Goes Here'}
					/>
			},
			{
				type: 'card-image', name: 'Card Image', component:
					<CardImage src={' https://source.unsplash.com/random'} alt={'Card Image'} style={ImageStyle.space}/>
			},
			{
				type: 'content', name: 'Content', component:
					<Content>
						{LOREM_1_PARA}
					</Content>
			}
		]);
	
	const onDragEnd = (dropped: DropResult) => {
		const updatedList = [...cardSections];
		const [item] = updatedList.splice(dropped.source.index, 1);
		updatedList.splice(dropped.destination!.index, 0, item);
		setCardSections(updatedList);
	};
	
	const deleteSection = (index: number) => {
		const updatedList = [...cardSections];
		updatedList.splice(index, 1);
		setCardSections(updatedList);
	};
	
	return (
		<div className='App'>
			<div className='card'>
				{
					cardSections.map(({component}, index) => <>{component}</>)
				}
				<Action align={ActionAlignment.end}>
					<Button variant={'outline'} theme={'danger'}>Cancel</Button>
					<Button variant={'flat'} theme={'primary'}>Save</Button>
				</Action>
			</div>
			<div className='card-control'>
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId={'drop-card'} direction={'vertical'}>
						{((provided,snapshot) =>
							<div  {...provided.droppableProps} ref={provided.innerRef}>
								{
									cardSections.map((({type, name}, index) =>
											<Draggable
												draggableId={`index-${index}`} index={index} key={`index-${index}`}
											>
												{
													(provided1) =>
														<div {...provided1.draggableProps}
														     ref={provided1.innerRef}
														     className={'container'}
														>
															<div className='item'>
																<div className='content'>
																	{type}
																</div>
																{cardSections?.length > 1 &&
																	<div className='controls'>
																<span
																	className='material-icons-round material-icons'
																	onClick={() => deleteSection(index)}
																>
																delete
															</span>
																		<span
																			className='material-icons material-icons-round'
																			{...provided1.dragHandleProps}>
																drag_handle
															</span>
																	</div>}
															</div>
														</div>}
											</Draggable>
									))
								}
								{provided.placeholder}
							</div>)}
					</Droppable>
				</DragDropContext></div>
		</div>)
		;
}

export default App;

// {/*<DragDropContext onDragEnd={onDragEnd}>*/}
// {/*	<Droppable droppableId={'drop-1'} direction={'vertical'}>*/}
// {/*		{(provided => (*/}
// {/*			<div {...provided.droppableProps} ref={provided.innerRef} className={'drop'}>*/}
// {/*				{*/}
// {/*					items.map((value, index) =>*/}
// {/*						<Draggable draggableId={value} index={index} key={value}>*/}
// {/*							{*/}
// {/*								(provided1 => (*/}
// {/*									<div {...provided1.draggableProps} {...provided1.dragHandleProps}*/}
// {/*									     ref={provided1.innerRef} className={'drag'}*/}
// {/*									>*/}
// {/*										{value}*/}
// {/*										*/}
// {/*									</div>*/}
// {/*								))*/}
// {/*							}*/}
// {/*						</Draggable>*/}
// {/*					)*/}
// {/*				}*/}
// {/*				{provided.placeholder}*/}
// {/*			</div>*/}
// {/*		))*/}
// {/*		}*/}
// {/*	</Droppable>*/}
// {/*</DragDropContext>*/}

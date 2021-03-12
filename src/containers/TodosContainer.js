import React from 'react';
import {connect} from 'react-redux';
import {
	setChangeInput,
	setInsert,
	setToggle,
	setRemove,
} from '../modules/todos';
import Todos from '../component/Todos';

const TodosContainer = ({
	name,
	description,
	todos,
	setChangeInput,
	update,
	setInsert,
	setToggle,
	setRemove,
}) => {
	return (
		<Todos
			name={name}
			description={description}
			todos={todos}
			onsetChangeInput={setChangeInput}
			onsetInsert={setInsert}
			onUpdate={update}
			onsetToggle={setToggle}
			onsetRemove={setRemove}
		/>
	);
};

export default connect(
	({todos}) => {
		console.log('todos', todos);
		return {
			name: todos.name,
			description: todos.description,
			todos: todos.todos,
		};
	},
	{
		setChangeInput,
		setInsert,
		setToggle,
		setRemove,
	},
)(TodosContainer);

// const TodosContainer = ({
// 	name,
// 	description,
// 	todos,
// 	changeInput,
// 	update,
// 	insert,
// 	toggle,
// 	remove,
// }) => {
// 	return (
// 		<Todos
// 			name={name}
// 			description={description}
// 			todos={todos}
// 			onChangeInput={changeInput}
// 			onInsert={insert}
// 			onUpdate={update}
// 			onToggle={toggle}
// 			onRemove={remove}
// 		/>
// 	);
// };

// export default connect(
// 	({todos}) => {
// 		console.log('todos', todos);
// 		return {
// 			name: todos.name,
// 			description: todos.description,
// 			todos: todos.todos,
// 		};
// 	},
// 	{
// 		changeInput,
// 		insert,
// 		toggle,
// 		remove,
// 		update,
// 	},
// )(TodosContainer);

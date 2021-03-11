import React from 'react';
import {connect} from 'react-redux';
import {changeInput, insert, toggle, remove, update} from '../modules/todos';
import Todos from '../component/Todos';

const TodosContainer = ({
	name,
	description,
	todos,
	changeInput,
	update,
	insert,
	toggle,
	remove,
}) => {
	return (
		<Todos
			name={name}
			description={description}
			todos={todos}
			onChangeInput={changeInput}
			onInsert={insert}
			onUpdate={update}
			onToggle={toggle}
			onRemove={remove}
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
		changeInput,
		insert,
		toggle,
		remove,
		update,
	},
)(TodosContainer);

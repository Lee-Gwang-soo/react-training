import React from 'react';

const TodoItem = ({todo, onToggle, onRemove}) => {
	return (
		<div className='todos'>
			<input
				type='checkbox'
				onClick={() => onToggle(todo.id)}
				checked={todo.done}
				readOnly={true}
			/>
			<span style={{textDecoration: todo.done ? 'line-through' : 'none'}}>
				{todo.name}
			</span>
			<button onClick={() => onRemove(todo.id)}>삭제</button>
		</div>
	);
};

const Todos = ({
	name,
	description,
	todos,
	onChangeInput,
	onInsert,
	onToggle,
	onRemove,
	onUpdate,
}) => {
	const onSubmit = (e) => {
		e.preventDefault();
		onInsert(name);
		onInsert(description);
		onChangeInput('');
	};
	const onChange = (e) => onChangeInput(e.target.value);

	return (
		<div className='todolist'>
			<h1 className='heading'>TodoList - Redux</h1>
			<form onSubmit={onSubmit}>
				<input value={name} onChange={onChange} />
				<input value={description} onChange={onChange} />
				<button type='submit'>등록</button>
			</form>
			<div>
				<b>todo : </b>
				{name} ({description})
			</div>
			<div>
				{todos.map((todo) => (
					<TodoItem
						todo={todo}
						key={todo.id}
						onToggle={onToggle}
						onRemove={onRemove}
					/>
				))}
			</div>
		</div>
	);
};

export default Todos;

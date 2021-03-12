import React from 'react';

const TodoItem = ({todo, onsetToggle, onsetRemove}) => {
	return (
		<div className='todos'>
			<input
				type='checkbox'
				onClick={() => onsetToggle(todo.id)}
				checked={todo.done}
				readOnly={true}
			/>
			<span style={{textDecoration: todo.done ? 'line-through' : 'none'}}>
				{todo.name}
			</span>
			<button onClick={() => onsetRemove(todo.id)}>삭제</button>
		</div>
	);
};

const Todos = ({
	name,
	description,
	todos,
	onsetChangeInput,
	onsetInsert,
	onsetToggle,
	onsetRemove,
}) => {
	const onSubmit = (e) => {
		e.preventDefault();
		onsetInsert(name, description);
		// onInsert(description);
		onsetChangeInput('');
	};
	const onChange = (key) => (e) => {
		console.log('key', key, e.target.value);
		onsetChangeInput(key, e.target.value);
	};
	return (
		<div className='todolist'>
			<h1 className='heading'>TodoList - Redux</h1>
			<form onSubmit={onSubmit}>
				<input value={name} onChange={onChange('name')} />
				<input value={description} onChange={onChange('description')} />
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
						onsetToggle={onsetToggle}
						onsetRemove={onsetRemove}
					/>
				))}
			</div>
		</div>
	);
};

export default Todos;

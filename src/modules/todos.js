import {createSlice} from '@reduxjs/toolkit';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const UPDATE = 'todos/UPDATE';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = (key, value) => {
	return {
		type: CHANGE_INPUT,
		key,
		value,
	};
};

// export const changeInput = (name, description) => ({
// 	type: CHANGE_INPUT,
// 	name,
// 	description,
// });

export const update = (name) => ({
	type: UPDATE,
	todo: {
		name: name,
	},
});
let id = 3;
export const insert = (name, description, createdAt, updatedAt) => ({
	type: INSERT,
	todo: {
		id: id++,
		name,
		done: false,
		description,
		createdAt: current,
		updatedAt: current,
	},
});

export const toggle = (id) => ({
	type: TOGGLE,
	id,
});

export const remove = (id) => ({
	type: REMOVE,
	id,
});

var now = new Date();
var current = `${now.getFullYear()}/${now.getMonth()}/${now.getDate()}/ ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
const initialState = {
	name: '',
	description: '',
	todos: [
		{
			id: 1,
			name: '온보딩 만들기',
			done: true,
			createdAt: current,
			updatedAt: current,
			description: '온보딩을 만들어보자!',
		},
		{
			id: 2,
			name: '트레이닝 1일차 만들기',
			done: false,
			createdAt: current,
			updatedAt: current,
			description: '트레이닝 관련 페이지 작성!',
		},
	],
};

// const todosSlice = createSlice({
//     name : 'todos',
//     initialState: [],
//     reducers: {
//         addTodo(state, action) {
//             const {id, name, createdAt, updatedAt, description} = action.payload
//             state.push({id, name, description, createdAt : current, updatedAt:current, done:false})
//         },
//         toggleTodo(state, action) {
//             const todo = state.find(todo => todo.id === action.payload)
//             if( todo ) {
//                 todo.done =! todo.done
//             }
//         },
//         removeTodo(state, action) {

//         }
//     }
// })
function todos(state = initialState, action) {
	switch (action.type) {
		case CHANGE_INPUT:
			return {
				...state,
				[action.key]: action.value,
			};
		case INSERT:
			return {
				...state,
				todos: state.todos.concat(action.todo),
			};
		case TOGGLE:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.id ? {...todo, done: !todo.done} : todo,
				),
			};
		case REMOVE:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.id),
			};
		case UPDATE:
			return {
				...state,
				name: action.name,
			};
		default:
			return state;
	}
}

export default todos;

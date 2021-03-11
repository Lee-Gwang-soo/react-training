import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Todo from './feature/Todo';
import Progress from './feature/Progress';
import Done from './feature/Done';
import PageNotFound from './feature/PageNotFound';
import './App.css';
import TodosContainer from './containers/TodosContainer';

const App = () => {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);

	return (
		<div>
			<TodosContainer />
			{/* <Router>
				<Switch>
					<Route exact path='/' component={Todo} />
					<Route path='/progress' component={Progress} />
					<Route path='/done' component={Done} />
					<Route component={PageNotFound} />
				</Switch>
			</Router> */}
		</div>
	);
};

export default App;

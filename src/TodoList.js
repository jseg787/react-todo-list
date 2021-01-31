import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
// import { v4 as uuidv4 } from 'uuid';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos:
				JSON.parse(localStorage.getItem('todolist')) ||
				[
					// {
					// 	text: 'item 1',
					// 	completed: false,
					// 	id: uuidv4()
					// },
					// {
					// 	text: 'item 2',
					// 	completed: false,
					// 	id: uuidv4()
					// }
				]
		};
		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.updateTodo = this.updateTodo.bind(this);
		this.save = this.save.bind(this);
		this.reset = this.reset.bind(this);
		this.toggleComplete = this.toggleComplete.bind(this);
	}

	addTodo(todo) {
		this.setState({ todos: [ ...this.state.todos, { text: todo.text, completed: false, id: todo.id } ] });
	}

	removeTodo(id) {
		const newTodos = this.state.todos.filter((todo) => todo.id !== id);
		this.setState({ todos: newTodos });
	}

	updateTodo(id, text) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, text };
			}
			return todo;
		});

		this.setState({ todos: updatedTodos });
	}

	save() {
		localStorage.setItem('todolist', JSON.stringify(this.state.todos));
	}

	reset() {
		localStorage.removeItem('todolist');
		this.setState({ todos: [] });
	}

	toggleComplete(id) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});

		this.setState({ todos: updatedTodos });
	}

	render() {
		const todos = this.state.todos.map((todo) => (
			<Todo
				id={todo.id}
				key={todo.id}
				text={todo.text}
				completed={todo.completed}
				remove={this.removeTodo}
				update={this.updateTodo}
				toggleComplete={this.toggleComplete}
			/>
		));
		return (
			<div>
				<div>Hello</div>
				{todos}
				<NewTodoForm add={this.addTodo} />
				<button onClick={this.save}>Save</button>
				<button onClick={this.reset}>Reset</button>
			</div>
		);
	}
}

export default TodoList;

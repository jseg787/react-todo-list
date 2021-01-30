import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					text: 'item 1',
					completed: false
				},
				{
					text: 'item 2',
					completed: false
				}
			]
		};
		this.addTodo = this.addTodo.bind(this);
	}

	addTodo(todo) {
		this.setState({ todos: [ ...this.state.todos, { text: todo, completed: false } ] });
	}

	render() {
		const todos = this.state.todos.map((todo) => <Todo text={todo.text} />);
		return (
			<div>
				<div>Hello</div>
				{todos}
				<NewTodoForm add={this.addTodo} />
			</div>
		);
	}
}

export default TodoList;

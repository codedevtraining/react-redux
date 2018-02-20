import React, { Component } from 'react';
import axios from 'axios';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { API_ENDPOINT } from '../../../../environments/environmnets';

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      description: '',
      done: false,
      list: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    // this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    // this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

    this.refresh()
  }

  refresh() {
    axios.get(`${API_ENDPOINT}/tasks?sort=-description`)
      .then(res => this.setState({ 
        ...this.state,
        description:'',
        list: res.data
      }))
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }

  // handleMarkAsDone(todo) {
  //   axios.put(
  //     `${API_ENDPOINT}/tasks${todo.id}`,
  //     { ...todo, done: true }
  //   ).then(res => this.refresh())
  // }

  // handleMarkAsPending(todo) {
  //   axios.put(
  //     `${API_ENDPOINT}/tasks${todo.id}`,
  //     { ...todo, done: false }
  //   ).then(res => this.refresh())
  // }

  handleAdd() {
    const description = this.state.description
    const done = this.state.done
    axios.post(`${API_ENDPOINT}/tasks`, { description, done })
      .then(res => this.refresh())
  }

  handleRemove(todo) {
    axios.delete(`${API_ENDPOINT}/tasks/${todo.id}`)
      .then(res => this.refresh())
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <TodoForm 
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
        />
        <TodoList 
          list={this.state.list}
          handleRemove={this.handleRemove}
          // handleMarkAsDone={this.handleMarkAsDone}
          // handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    );
  }
};

export default Todo;

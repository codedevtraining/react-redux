import React, { Component } from 'react';
import axios from 'axios';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { API_ENDPOINT } from '../../../../environments/environmnets';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { description: '', list: [] }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)

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

  handleAdd() {
    const description = this.state.description
    axios.post(`${API_ENDPOINT}/tasks`, { description })
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
        />
      </div>
    );
  }
};

export default Todo;

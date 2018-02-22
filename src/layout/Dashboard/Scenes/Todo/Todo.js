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
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.hangleClear = this.hangleClear.bind(this)

    this.refresh()
  }

  refresh(description = '') {
    const search = description 
    ? `&description_regex=/${description}/`
    : ''
    axios.get(`${API_ENDPOINT}/todos?sort=-createdAt${search}`)
      .then(res => this.setState({ ...this.state, description,  list: res.data }))
  }

  handleSearch() {
    this.refresh(this.state.description)
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }

  handleMarkAsDone(todo) {
    axios.put(
      `${API_ENDPOINT}/todos${todo._id}`,
      { ...todo, done: true }
    ).then(res => this.refresh())
  }

  handleMarkAsPending(todo) {
    axios.put(
      `${API_ENDPOINT}/todos${todo._id}`,
      { ...todo, done: false }
    ).then(res => this.refresh())
  }

  handleAdd() {
    const description = this.state.description
    const done = this.state.done
    axios.post(`${API_ENDPOINT}/todos`, { description, done })
      .then(res => this.refresh())
  }

  handleRemove(todo) {
    axios.delete(`${API_ENDPOINT}/todos/${todo._id}`)
      .then(res => this.refresh())
  }

  hangleClear() {
    this.refresh()
  }


  render() {
    return (
      <div>
        <h1>Todo</h1>
        <TodoForm 
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClear={this.hangleClear}
        />
        <TodoList 
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    );
  }
};

export default Todo;

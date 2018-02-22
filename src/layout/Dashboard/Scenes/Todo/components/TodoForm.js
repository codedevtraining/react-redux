import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form } from 'semantic-ui-react';

import { add, changeDescription, search } from './TodoActions'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler = (e) => {
    const { add, search, description } = this.props;
    if(e.key === 'Enter')
      e.shiftKey 
      ? search()
      : add(description)
    else if (e.key === 'Espace')
      this.props.handleClear()
  }

  render() {
      const { add, search, description } = this.props;
      return (
      <Form>
        <Form.Field>
          <label>Descrição</label>
          <input 
            placeholder='Insira a descrição.'
            onChange={this.props.changeDescription}
            value={this.props.description}
            onKeyUp={this.keyHandler}
          />
        </Form.Field>
        <Button 
          type='submit'
          onClick={() => add(description)}
        >
        +
        </Button>
        <Button 
          type='submit'
          onClick={() => search()}
        >
          Pesquisar
        </Button>

        <Button 
          type='submit'
          onClick={this.props.handleClear}
        >
          Limpar
        </Button>
      </Form>  
    )
  }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispathToProps = dispath => 
  bindActionCreators({ add, changeDescription, search }, dispath)

export default connect(mapStateToProps, mapDispathToProps)(TodoForm);
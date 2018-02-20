import React from 'react';
import { Button, Form } from 'semantic-ui-react'

const TodoForm = props => {
  return (
    <Form>
      <Form.Field>
        <label>Descrição</label>
        <input 
          placeholder='Insira a descrição.'
          onChange={props.handleChange}
          value={props.description}
        />
      </Form.Field>
      <Button 
        type='submit'
        onClick={props.handleAdd}
      >+</Button>
    </Form>
  );
};

export default TodoForm;
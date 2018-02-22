import React from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';

const TodoList = props => {
  const renderRows = () => { 
    const list = props.list || []
    return list.map(todo => (
      <Grid key={todo.id} >
        <Grid.Row columns={3}>

          <Grid.Column width={12}>
            <h3> {todo.description} </h3>
          </Grid.Column>

          <Grid.Column textAlign='center' width={4}>
            <Button 
              icon='check' 
              color='green'
              onClick={() => props.handleMarkAsDone(todo)}
            />
            <Button 
              icon='remove bookmark' 
              color='yellow'
              onClick={() => props.handleMarkAsPending(todo)}
            />
            <Button 
              icon='trash' 
              color='red'
              onClick={() => props.handleRemove(todo)}
            />
          </Grid.Column>

          <Grid.Column width={16}>
            <hr/>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    ))
  }
  return (
    <div>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={12}>
            <h1>Descrição</h1>
          </Grid.Column>
          <Grid.Column textAlign='center' width={4}>
            <h1>Ações</h1>
          </Grid.Column>
          <Grid.Column width={16}>
            {renderRows()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({list: state.todo.list})

export default connect(mapStateToProps)(TodoList);
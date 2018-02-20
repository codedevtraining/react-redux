import React from 'react';

const TodoList = props => {
  const renderRows = () => { 
    const list = props.list || []
    return list.map(todo => (
      <h3 key={todo.id}>
        {todo.description} 
        <a 
          key={todo.id}
          onClick={() => props.handleRemove(todo)}
        >
          -
        </a>
      </h3>
    ))
  }
  return (
    <div>
      <h1>Descrição</h1>
      {renderRows()}
      <h1>Ações</h1>
    </div>
  );
};

export default TodoList;
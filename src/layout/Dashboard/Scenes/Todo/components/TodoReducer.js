const INITIAL_STATE = {
  description: 'Ler Um Livro.',
  list: [{
    id: 1,
    description: 'Pagar fatura do cartão.',
    done: true
  }, {
    id: 2,
    description: 'Reunião com a equipe às 10:00.',
    done: false
  }, {
    id: 3,
    description: 'Consulta médica na terça depois do almoço.',
    done: false
  }]
}

export const todoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'DESCRIPTION_CHANGED': 
      return { ...state, description: action.payload }
    case 'TODO_SEARCHED':
      return { ...state, list: action.payload.data }   
    case 'TODO_ADDED' :
      return { ...state, description: '' }   
    default:
      return state
  }
} 

export default todoReducer
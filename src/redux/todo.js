import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todo: () => ({
    description: 'Ler Livro.',
    list: [{
      id: 1,
      description: 'Pagar fatura do cartão.',
      done: true
    }, {
      id: 1,
      description: 'Reunião com a equipe às 10:00.',
      done: false
    }, {
      id: 1,
      description: 'Consulta médica na terça depois do almoço.',
      done: false
    }]
  })
})

export default rootReducer;
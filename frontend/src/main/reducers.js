import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
    description: 'Opaaaaa',
    list: [{
      _id: 1,
      description: 'Pagar fatura do cartao',
      done: true
    }, {
      _id: 2,
      description: 'Reuniao com equipe',
      done: false
    }, {
      _id: 3,
      description: 'Consulta na terça',
      done: false
    }]
  })
})

export default rootReducer

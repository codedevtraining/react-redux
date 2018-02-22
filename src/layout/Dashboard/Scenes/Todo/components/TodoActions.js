import axios from 'axios';

import { API_ENDPOINT } from '../../../../../environments/environmnets';

export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})

export const search = () => {
  const req = axios.get(`${API_ENDPOINT}/todos?sort=-createdAt`)
  return {
    type: 'TODO_SEARCHED',
    payload: req
  }
}

export const add = (description) => {
  const req = axios.post(`${API_ENDPOINT}/todos`, { description })
  return {
    type: 'TODO_ADDED',
    payload: req
  }
}
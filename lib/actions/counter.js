import store from '../stores/counter';

export const increment = () => {
  store.dispatch({
    type: 'INCREMENT'
  })
}

export const decrement = () => {
  store.dispatch({
    type: 'DECREMENT'
  })
}

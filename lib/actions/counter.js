import store from '../stores/configureStore';

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

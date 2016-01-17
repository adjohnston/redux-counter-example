import React from 'react';
import Button from '../atoms/button';
import store from '../../stores/counter';
import {increment, decrement} from '../../actions/counter';

const Counter = () => {
  return (
    <section>
      <h1>{store.getState()}</h1>

      <Button
        onClick={increment}
        text="+" />

      <Button
        onClick={decrement}
        text="-" />
    </section>
  )
}

export default Counter;

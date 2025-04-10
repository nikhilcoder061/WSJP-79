import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/reducers/counterSlice';

export default function App() {

  const counter = useSelector((state) => state.counter.value);

  const dispatch = useDispatch()

  return (
    <div className='main'>
      <button onClick={() => dispatch(decrement())}> - </button>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}

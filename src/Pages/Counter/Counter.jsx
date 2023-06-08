import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, setName } from './counterSlice'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const Name = useSelector((state) => state.counter.name)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(50))}
        >
          incrementByAmount
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(setName("arvind"))}
        >
          set name
        </button>
      </div>
      <h1>{Name}</h1>
    </div>
  )
}
export default Counter
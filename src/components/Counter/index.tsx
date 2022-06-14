import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../features/counter/counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <button onClick={() => dispatch(increment())}>INCREMENT +</button>
        <button onClick={() => dispatch(decrement())}>DECREMENT -</button>

        <span>{count}</span>
      </div>
    </>
  )
}

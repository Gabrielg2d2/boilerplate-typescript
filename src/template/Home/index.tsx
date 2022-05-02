import { useHomeContext } from 'context/Home'

export function Home() {
  const { testContext, useCounter } = useHomeContext()
  const { count, increment, reset, decrement } = useCounter()

  return (
    <div>
      <h1>Home</h1>
      <p>{testContext}</p>
      <p>{count}</p>
      <button onClick={() => increment()}>Increment</button>
      {'  '}
      <button onClick={() => reset()}>Reset</button>
      {'  '}
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  )
}

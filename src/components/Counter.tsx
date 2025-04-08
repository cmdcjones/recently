import React from 'react'
import '../styles/Counter.css'

type CounterProps = {
  count: number
  setCount: (current: number) => void
}
const Counter: React.FC<CounterProps> = ({ count, setCount }: CounterProps) => {
  return (
    <div>
      <title>Recently | Counter</title>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
    </div>
  )
}

export default Counter

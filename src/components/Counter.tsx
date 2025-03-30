import React from 'react'

type CounterProps = {
  count: number
  setCount: (current: number) => void
}
const Counter: React.FC<CounterProps> = ({ count, setCount }: CounterProps) => {
  console.log(
    `Counter component rendered at ${new Date().toLocaleTimeString()}`
  )
  return (
    <div>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
    </div>
  )
}

export default Counter

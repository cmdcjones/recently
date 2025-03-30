import React from 'react'

const Home: React.FC = () => {
  console.log(`Home component rendered at ${new Date().toLocaleTimeString()}`)
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}

export default Home

import React from 'react'
import { memo } from 'react'

const Footer: React.FC = memo(() => {
  console.log(`Footer component rendered at ${new Date().toLocaleTimeString()}`)
  return (
    <footer>
      <div>2025</div>
    </footer>
  )
})

export default Footer

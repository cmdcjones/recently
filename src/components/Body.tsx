import React, { useContext, memo, useState } from 'react'
import '../styles/Body.css'
import { NavContext, NavTitle } from '../context/NavContext'
import Home from './Home'
import Counter from './Counter'

const Body: React.FC = memo(() => {
  const { currentTab } = useContext(NavContext)
  const [count, setCount] = useState(0)
  const renderTab = (key: NavTitle) => {
    switch (key) {
      case 'Home': {
        return <Home />
      }
      case 'Counter':
        return <Counter count={count} setCount={setCount} />
    }
  }

  return <div className="main">{renderTab(currentTab)}</div>
})

export default Body

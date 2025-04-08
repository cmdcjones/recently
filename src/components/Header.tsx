import type { NavTitle } from '../context/NavContext'
import React, { useContext, memo } from 'react'
import '../styles/Header.css'
import { NavContext } from '../context/NavContext'

const Header: React.FC = () => {
  return (
    <header>
      <h1>My Application</h1>
      <NavBar />
    </header>
  )
}

type NavItem = {
  id: number
  name: NavTitle
}

const NavBar: React.FC = memo(() => {
  const navItems: NavItem[] = [
    {
      id: 1,
      name: 'Home',
    },
    {
      id: 2,
      name: 'Counter',
    },
  ]
  const { setCurrentTab } = useContext(NavContext)
  return (
    <div className="nav">
      {navItems.map((item) => (
        <div
          className="nav-tab"
          key={item.id}
          onClick={() => setCurrentTab(item.name)}
        >
          {item.name}
        </div>
      ))}
    </div>
  )
})

export default Header

import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Body from '../components/Body'
import { NavContext } from '../context/NavContext'

const Layout: React.FC = () => {
  console.log(`Layout component rendered at ${new Date().toLocaleTimeString()}`)
  const [currentTab, setCurrentTab] = useState<'Home' | 'Counter'>('Home')
  return (
    <div>
      <NavContext.Provider
        value={{
          currentTab,
          setCurrentTab,
        }}
      >
        <Header />
        <Body />
      </NavContext.Provider>
      <Footer />
    </div>
  )
}

export default Layout

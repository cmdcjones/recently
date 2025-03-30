import { createContext } from 'react'

export type NavTitle = 'Home' | 'Counter'
export const NavContext = createContext<{
  currentTab: NavTitle
  setCurrentTab: React.Dispatch<React.SetStateAction<NavTitle>>
}>({
  currentTab: 'Home',
  setCurrentTab: () => {},
})

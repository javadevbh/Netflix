import React from 'react'

//Components
import RightSidebar from "./components/RightSidebar"
import LeftSidebar from './components/LeftSidebar'
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {
  return (
    <>
      <RightSidebar/>
      <Header/>
      <MainContent/>
      <LeftSidebar/>
    </>
  )
}

export default App

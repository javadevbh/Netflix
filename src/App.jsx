import React, { useState } from 'react'

//Components
import RightSidebar from "./components/RightSidebar"
import LeftSidebar from './components/LeftSidebar'
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {

  const [openedSideBar , setOpenedSideBar] = useState(false);

  const openedSideBarHandler = () => {
    setOpenedSideBar(true);
  }
  const closedSideBarHandler = () => {
    setOpenedSideBar(false);
  }

  return (
    <>
      <RightSidebar func={closedSideBarHandler} status={openedSideBar} />
      <Header func={openedSideBarHandler} />
      <MainContent/>
      <LeftSidebar/>
    </>
  )
}

export default App

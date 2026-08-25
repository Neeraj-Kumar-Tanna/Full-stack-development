import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar name="Neeraj Tanna" options={["home" , "followers" , "reels" , "explore"]} />
      <Navbar name="vaishnav naroju" options={["abcd" , "efgh" , "ijkl" , "mnop" , "qrst" , "uvwx" , "yz"]} />
    </div>
  )
}

export default App

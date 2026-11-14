import React from 'react'
import "./App.scss"
import Main from './components/Main'
import NavBar from './components/NavBar'
import MacTemplete from './pages/MacTemplete'
import Github from './pages/Github'
import NoteBook from './pages/NoteBook'
import Pdfs from './pages/Pdfs'
import Spotify from './pages/Spotify'
// import Terminal from 'react-console-emulator'
import TerminalWind from './pages/TerminalWind'

const App = () => {
  return (
    <div>
      <NavBar />
      {/* Iam neeaj kuamr */}
      <Main />
      <Github />
      <NoteBook/>
      <Pdfs link="/Neeraj_resume.pdf" />
      <Spotify />
      <TerminalWind />
    </div>
  )
}

export default App
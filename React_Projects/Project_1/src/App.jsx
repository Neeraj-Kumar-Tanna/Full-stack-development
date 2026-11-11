import React from 'react'
import "./App.scss"
import Main from './components/Main'
import NavBar from './components/NavBar'
import MacTemplete from './pages/MacTemplete'
import Github from './pages/Github'
import NoteBook from './pages/NoteBook'
import Pdfs from './pages/Pdfs'

const App = () => {
  return (
    <div>
      <NavBar />
      <Main />
      <Github />
      <NoteBook/>
      <Pdfs link="/Neeraj_resume.pdf" />
    </div>
  )
}

export default App
import React, { useState } from 'react'
import "./App.scss"
import Main from './components/Main'
import NavBar from './components/NavBar'
import MacTemplete from './pages/MacTemplete'
import Github from './pages/Github'
import NoteBook from './pages/NoteBook'
import Pdfs from './pages/Pdfs'
import Spotify from './pages/Spotify'
import Wikipidia from './pages/Wikipidia'


const App = () => {
  const [windowopen, setWindowopen] = useState({
   "github" : false,
   "notebook" : false,
   "pdf" : false,
   "spotify" : false,
   "wikipidia" : false
  });


  return (
    <div>
      <NavBar />
      <Main windowopen={windowopen} setWindowopen={setWindowopen} />
      {windowopen.github &&  <Github />}
      {windowopen.notebook && <NoteBook/>}
      {windowopen.pdf && <Pdfs link="/Neeraj_resume.pdf" />}
      {windowopen.spotify && <Spotify />}
      {windowopen.wikipidia && <Wikipidia />}
    </div>
  )
}

export default App
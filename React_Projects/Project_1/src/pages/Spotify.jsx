import React from 'react'
import MacTemplete from './MacTemplete'

const Spotify = () => {
  return (
    <MacTemplete>
        <iframe data-testid="embed-iframe" style={{borderRadius:"12px" , height:"100%" , paddingBottom:"1.5rem"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdMUUSqm9tTc?utm_source=generator&si=1977db65e4754354" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </MacTemplete>
  )
}

export default Spotify

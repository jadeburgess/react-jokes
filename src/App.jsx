//import { useState } from 'react'
import './App.css'
import Joke from './components/Joke'
import React from "react"
import jokesData from './assets/js/jokesData'

function App() {

  const jokesElements = jokesData.map(jokes, index => {
    return <Joke key={index} setup={jokes.setup} punchline={jokes.punchline} />
  })
  console.log(jokesElements)
  return (
    <div>
        {jokesElements}
    </div>
  )
}
export default App

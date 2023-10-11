import { useState, useEffect } from 'react'
import './App.css'
import Character from './components/Character'

function App() {
  const [characters, setCharacters] = useState([])
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(false)
  const swapiUrl = 'https://swapi.dev/api/'

  async function fetchData(url, keyword) {
    const response = await fetch(url + keyword)
    const data = await response.json()
    return data.results
  }

  return <div>LOL</div>
}

export default App

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

  useEffect(() => {
    fetchData(swapiUrl, 'people').then((response) => {
      setCharacters(response)
    })
  }, [])

  return <>{characters && characters.map((char) => <Character character={char} />)}</>
}

export default App

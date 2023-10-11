import React from 'react'
import { Link } from 'react-router-dom'

function Character({ character }) {
  return <Link>{character.name}</Link>
}

export default Character

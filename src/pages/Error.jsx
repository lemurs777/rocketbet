import React from 'react'
import { Link } from 'react-router-dom'
import ButtonGradient from '../components/Buttons/ButtonGradient'

const Error = () => {
  return (
    <ButtonGradient>

      <Link to={'/'}>Error</Link>
    </ButtonGradient>
  )
}

export default Error
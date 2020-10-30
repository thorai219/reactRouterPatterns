import React from 'react'
import DogDetails from './DogDetails'
import { useParams } from 'react-router-dom'

function FilterDogs({ dogs }) {
  const { name } = useParams()

  if (name) {
    const dog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    )
    return <DogDetails dog={dog}/>
  }

  return null
}

export default FilterDogs
import React from 'react'
import { Link } from 'react-router-dom'

function DogList({dogs}) {
  return (
    <div className='dog-container'>
      {dogs.map(dog => (
        <div className='card'>
          <img className='image' src={dog.src} alt={dog.name}/>
          <h2>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
          </h2>
        </div>
      ))}
    </div>
  )
}

export default DogList
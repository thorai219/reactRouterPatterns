import React from 'react'
import { Link, Redirect } from 'react-router-dom'

function DogDetails({dog}) {

  if (!dog) return <Redirect to='/dogs' />

  return (
    <div className='card-container'>
      <div className='card'>
        <img className='image' src={dog.src} alt={dog.name} />
        <p>Name: {dog.name}</p>
        <span>Age: {dog.age}</span>
        <ul>
          {dog.facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
      <Link to='/dogs'>Go Back</Link>
    </div>
  )
}

export default DogDetails
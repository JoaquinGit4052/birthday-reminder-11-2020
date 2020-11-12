import React, { useState } from 'react'
import data from './data'

function Card() {
  const [people, setPeople] = useState(data)

  const birthdays = people.length

  const checkPerson = (id) => {
    const newPeople = people.filter((person) => {
      return person.id !== id
    })

    setPeople(newPeople)
  }

  return (
    <>
      <div className='card'>
        <h5>{birthdays} birthdays today</h5>
        {people.map((person) => {
          const { id, name, age } = person
          return (
            <div key={id} className='card-item'>
              <h4>{name}</h4>
              <h5>{age}</h5>
              <button
                type='button'
                className='item-btn'
                onClick={() => checkPerson(id)}>
                Check
              </button>
            </div>
          )
        })}
        <button
          type='button'
          className='card-btn'
          onClick={() => setPeople([])}>
          Check All
        </button>
      </div>
    </>
  )
}

export default Card

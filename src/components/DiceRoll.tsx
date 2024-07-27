import React from 'react'

import { averageDiceRolls, minMaxDiceRolls } from '../utils/index'

type setter = React.Dispatch<React.SetStateAction<number>>

type DiceRollProps = {
  avg: number
  setAvg: setter
  min: number
  setMin: setter
  max: number
  setMax: setter
  name: string
}

export default function DiceRoll({
  avg,
  setAvg,
  min,
  setMin,
  max,
  setMax,
  name
}: DiceRollProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const tirada = event.target.value

    const avg = averageDiceRolls(tirada)
    const { min, max } = minMaxDiceRolls(tirada)

    setAvg(avg)
    setMin(min)
    setMax(max)
  }

  return (
    <section>
      <div className='grid grid-cols-2 items-center'>
        <label htmlFor={name} className='font-bold'>
          Tirada:
        </label>
        <input
          onChange={handleChange}
          type='text'
          autoComplete='off'
          name={name}
          id={name}
          className='rounded-md p-1 my-8'
        />
      </div>

      <article>
        <p>Mínimo: {min}</p>
        <p>Promedio: {avg}</p>
        <p>Máximo: {max}</p>
      </article>
    </section>
  )
}

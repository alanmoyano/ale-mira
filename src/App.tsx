import React, { useState } from 'react'
import './App.css'

function average(x: number) {
  return Math.floor(x / 2) + 1
}

function averageRoll(text: string): number {
  if (!text) return 0

  const regexp = /\d+/g

  const result = text.match(regexp)

  if (!result) return 0

  const [amount = 1, dice, mod = 0] = result.map(n => Number(n))

  return amount * average(dice) + mod
}

function minMax(roll: string): [number, number] {
  const regexp = /\d+/g

  const result = roll.match(regexp)

  if (!result) return [0, 0]

  const [amount = 1, dice, mod = 0] = result.map(n => Number(n))

  return [amount * 1 + mod, amount * dice + mod]
}

function App() {
  const [avg, setAvg] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const tirada = event.target.value

    const avg = averageRoll(tirada)
    const [min, max] = minMax(tirada)

    setAvg(avg)
    setMin(min)
    setMax(max)
  }

  return (
    <>
      <div className='gap-2 grid grid-flow-col items-center'>
        <label htmlFor='tirada' className='font-bold'>
          Tirada:
        </label>
        <input
          onChange={handleChange}
          type='text'
          autoComplete='off'
          name='tirada'
          id='tirada'
          className='rounded-md p-1 my-8'
        />
      </div>

      <section>
        <p>Mínimo: {min}</p>
        <p>Promedio: {avg}</p>
        <p>Máximo: {max}</p>
      </section>
    </>
  )
}

export default App

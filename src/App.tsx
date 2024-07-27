import { useState } from 'react'

import '@/App.css'

import DiceRoll from '@/components/DiceRoll'
import Comparison from './components/Comparison'

function App() {
  const [avg1, setAvg1] = useState(0)
  const [min1, setMin1] = useState(0)
  const [max1, setMax1] = useState(0)

  const [avg2, setAvg2] = useState(0)
  const [min2, setMin2] = useState(0)
  const [max2, setMax2] = useState(0)

  const form1 = (document.getElementById('firstRoll') as HTMLInputElement) ?? {
    value: ''
  }
  const form2 = (document.getElementById('secondRoll') as HTMLInputElement) ?? {
    value: ''
  }

  return (
    <main>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <DiceRoll
          name='firstRoll'
          avg={avg1}
          setAvg={setAvg1}
          min={min1}
          setMin={setMin1}
          max={max1}
          setMax={setMax1}
        />
        <DiceRoll
          name='secondRoll'
          avg={avg2}
          setAvg={setAvg2}
          min={min2}
          setMin={setMin2}
          max={max2}
          setMax={setMax2}
        />
      </section>
      <section className='mt-12'>
        <Comparison
          avg1={avg1}
          min1={min1}
          max1={max1}
          avg2={avg2}
          min2={min2}
          max2={max2}
          roll1={form1.value}
          roll2={form2.value}
        />
      </section>
    </main>
  )
}

export default App

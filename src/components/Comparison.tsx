import { compare } from '@/utils'

type ComparisonProps = {
  avg1: number
  min1: number
  max1: number
  avg2: number
  min2: number
  max2: number
  roll1: string
  roll2: string
}

function message(percentage: number) {
  if (percentage < 100) return `es ${percentage}% menor que`
  if (percentage > 100) return `es ${percentage - 100}% mayor que`
  return 'es igual a'
}

export default function Comparison({
  avg1,
  min1,
  max1,
  avg2,
  min2,
  max2,
  roll1,
  roll2
}: ComparisonProps) {
  const comparison = {
    min: compare(min1, min2),
    avg: compare(avg1, avg2),
    max: compare(max1, max2)
  }

  return (
    <div className='grid items-center gap-y-1'>
      <h2>
        <u>Comparación</u>
      </h2>

      <div>
        <article>
          <h3>
            <u>Mínimo</u>
          </h3>
          <p>
            '{roll1}' {message(comparison.min)} '{roll2}'
          </p>
        </article>
      </div>

      <div>
        <article>
          <h3>
            <u>Promedio</u>
          </h3>
          <p>
            '{roll1}' {message(comparison.avg)} '{roll2}'
          </p>
        </article>
      </div>

      <div>
        <article>
          <h3>
            <u>Máximo</u>
          </h3>
          <p>
            '{roll1}' {message(comparison.max)} '{roll2}'
          </p>
        </article>
      </div>
    </div>
  )
}

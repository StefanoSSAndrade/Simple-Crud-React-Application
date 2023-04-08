import { useState } from 'react'
import { Home } from './components/Home'
import "./global.css"

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home />
    </div>
  )
}


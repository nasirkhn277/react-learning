import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [counter, setCount] = useState(0)

  let addcounter = () => {
    if(counter >= 20) return false;
    setCount(counter+1)
  }

  let removecounter = () => {
    if(counter < 1) return false;
    setCount(counter-1)
  }

  return (
    <>
      <h1>Chai or react</h1>
      <h3>counter: {counter}</h3>
      <button onClick={addcounter}>Add Value</button>
      <button onClick={removecounter}>Remove Value</button>
    
    </>
  )
}

import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"></div>
        <button onClick={() => setColor("red")} className="outline-none px-4" style={{background: "red"}}>Red</button>
        <button onClick={() => setColor("white")} className="outline-none px-4" style={{background: "white"}}>White</button>

        <button onClick={() => setColor("yelow")} className="outline-none px-4" style={{background: "yelow"}}>Yellow</button>

        <button onClick={() => setColor("green")} className="outline-none px-4" style={{background: "green"}}>Green</button>

        <button onClick={() => setColor("pink")} className="outline-none px-4" style={{background: "pink"}}>Pink</button>

        <button onClick={() => setColor("orange")} className="outline-none px-4" style={{background: "orange"}}>Orange</button>

      </div>
    </>
  )
}

export default App

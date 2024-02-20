import { useState } from 'react'
import {InputBox} from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            
        <div className="w-full mb-1">
            <InputBox label={"From"} type={"text"}  value=""/>
       </div>
       <div className="relative w-full h-0.5">
            <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
             swap
            </button>
        </div>
       <div className="w-full mb-1">
            <InputBox label={"to"} type={"text"} amountDisable />
       </div>
       <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
            Convert 
        </button>
       </div>
        </div>
    </div>
    </>
  )
}

export default App

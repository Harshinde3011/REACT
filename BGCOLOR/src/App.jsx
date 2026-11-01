import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")}  className='outline-none px-4 rounded-full text-black' style={{ backgroundColor: "red" }}>
            Red
          </button>
          <button onClick={() => setColor("green")} className='outline-none px-4 rounded-full text-black' style={{ backgroundColor: "green" }}>
            Red
          </button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 rounded-full text-black' style={{ backgroundColor: "yellow" }}>
            Red
          </button>
          <button onClick={() => setColor("pink")} className='outline-none px-4 rounded-full text-black' style={{ backgroundColor: "pink" }}>
            Red
          </button>
        </div>
      </div>

    </div>
  )
}

// - onClick={someFunction} — passes a function reference.
// - onClick={() => someFunction("pink")} — passes a function that calls someFunction("pink") when clicked.
// In your example, the arrow function lets you pass the argument "pink" and control exactly when setColor() executes. onClick want function reference if you directly use onClick={someFunction("pink")} it wont work, it automatically executes function that you pass

export default App

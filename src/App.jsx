import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100">
        <div className="addTodo">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
        </div>
        <h3 className='text-xl font-bold'>Your Todos</h3>
        <div className="todos">
          <div className="todo"></div>
        </div>
      </div>
    </>
  )
}

export default App

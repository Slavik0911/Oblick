import {useState} from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import AddPos from './AddPos' 

function Position({ name, size, price, profit, state, photo  }) {
  const stateColors = {
    ordered: 'bg-green-400',
    stock: 'bg-blue-400',
    sold: 'bg-red-400',
  }

  const bgColor = stateColors[state] || 'bg-gray-400'

  return (
    <div className="flex items-center justify-center">
      <div className={`flex items-center justify-between ${bgColor} rounded-3xl p-3 w-sm m-1`}>
        <div className="text-black">
          <h2 className="text-center font-semibold">{name}</h2>
          <p>Size{size}</p>
          <p>Price-{price}</p>
          <p>Profit-{profit}</p>
        </div>
        <img
            src={photo}
            alt={name}
            className="w-24 h-24 object-cover rounded-lg"
          />
      </div>
    </div>
  )
}

function HomePage({ positions }) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pb-24">
      {positions.map((pos, index) => (
        <Position
          key={index}
          name={pos.name}
          size={pos.size}
          price={pos.purchase}
          profit={pos.profit}
          state={pos.state}
          photo={pos.photo}
        />
      ))}

      <button
        onClick={() => navigate('/add')}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 rounded-3xl p-3 w-sm h-29 bg-gray-400 shadow-lg z-50"
      >
        Add new
      </button>
    </div>
  )
}


function App() {
    
  const [positions, setPosition] = useState([])

    const addPosition=(newPos)=>{
      setPosition((prev) => [...prev, newPos])
    }
  
  return (
    <Routes>
      <Route path="/" element={<HomePage positions={positions} />} />
      <Route path="/add" element={<AddPos addPosition={addPosition} />} />
    </Routes>
  )
}

export default App
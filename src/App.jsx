import './index.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import AddPos from './AddPos' // обов'язково імпортуй AddPos

function Position({ name, size, price, profit, state }) {
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
          src="/nindza.JPG"
          className="w-25 h-25 object-cover rounded-md"
        />
      </div>
    </div>
  )
}

function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pb-24">
      <Position name={"Salomon xa pro 3d"} size={42} price={1400} profit={500} state="ordered" />
      <Position name={"Salomon xt Wings black"} size={43} price={1500} profit={400} state="stock" />
      <Position name={"Salomon speedcross 44р"} size={44} price={1600} profit={600} state="sold" />
      <Position name={"Salomon xa pro 3d"} size={42} price={1400} profit={500} state="ordered" />
      <Position name={"Salomon xt Wings black"} size={43} price={1500} profit={400} state="stock" />
      <Position name={"Salomon speedcross 44р"} size={44} price={1600} profit={600} state="sold" />

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
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddPos />} />
    </Routes>
  )
}

export default App

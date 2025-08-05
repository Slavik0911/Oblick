import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  return (
    <>
    <div className='flex items-center justify-center'>
    <div className="flex items-center justify-between bg-blue-400 rounded-3xl p-3 w-sm border border-blue-500">
      <div className="text-black">
        <h2 className="text-center font-semibold">Salomon xa pro 3d</h2>
        <p>Розмір–43</p>
        <p>Ціна–1500</p>
        <p>Прибуток–400</p>
      </div>
      <img
        src="/public/nindza.JPG"
        alt="Salomon xa pro 3d"
        className="w-25 h-25 object-cover rounded-md"
      />
    </div>

    </div>     
    </>
  )
}


export default App

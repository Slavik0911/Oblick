import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddPos({ addPosition }) {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [size, setSize] = useState("")
  const [purchase, setPurchase] = useState("")
  const [sale, setSale] = useState("")
  const [profit, setProfit] = useState("")
  const [state, setState] = useState("ordered")
  const [photo, setPhoto] = useState()

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPhoto(previewUrl);
    }
  };
  
  const handleSave = () => {
    const newPos = {
      name,
      description,
      size,
      purchase,
      sale,
      profit: sale-20-(sale*0.02)-purchase, 
      state,
      photo
    }
  
    addPosition(newPos)
    navigate("/")
  }


  return (
    <div className="flex flex-col items-center gap-3 p-4 mx-auto max-w-sm w-full">
      {/* Name */}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-2xl bg-gray-300 px-4 py-2"
      />


      {/* Description */}
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full h-32 rounded-2xl bg-gray-300 px-4 py-2"
      />

      {/* Photo and Size */}
      <div className="flex gap-3 w-full">
      <button
        onClick={() => document.getElementById('photoInput').click()}
        className="basis-1/2 w-full text-left rounded-2xl bg-gray-300 px-4 py-2 text-gray-600"
      >
        Add photo
      </button>

      <input
        id="photoInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
        
        <input
          type="number"
          placeholder="Size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="basis-1/2 rounded-2xl bg-gray-300 px-4 py-2 min-w-0"
        />

      </div>



      {/* Purchase and Sale */}
      <div className="flex gap-3 w-full">
        <div className="flex flex-col basis-1/2 min-w-0">
          <label className="ml-2 text-[25px] text-gray-700">Purchase</label>
          <input
            value={purchase}
            onChange={(e) => setPurchase(e.target.value)}
            type="number"
            className="rounded-2xl bg-gray-300 px-4 py-2 w-full"
          />
        </div>

        <div className="flex flex-col basis-1/2 min-w-0">
          <label className="text-[25px] ml-2 text-gray-700">Sale</label>
          <input
            value={sale}
            onChange={(e) => setSale(e.target.value)}
            type="number"
            className="rounded-2xl bg-gray-300 px-4 py-2 w-full"
          />
        </div>
      </div>


      

      {/* State */}
      <div className="flex gap-3 w-full justify-center">
        <button
          className={`w-12 h-12 rounded-xl ${state === "ordered" ? "bg-green-500" : "bg-green-300"}`}
          value={state}
          title="Ordered"
          onClick={() => setState("ordered")}
        ></button>
        <button
          className={`w-12 h-12 rounded-xl ${state === "stock" ? "bg-blue-600" : "bg-blue-400"}`}
          value={state}
          title="In stock"
          onClick={() => setState("stock")}
        ></button>
        <button
          className={`w-12 h-12 rounded-xl ${state === "sold" ? "bg-red-600" : "bg-red-400"}`}
          value={state}
          title="Sold"
          onClick={() => setState("sold")}
        ></button>
      </div>

      {/* Save */}
      <button onClick={handleSave} className="w-full rounded-2xl bg-gray-300 px-4 py-2 font-semibold mt-2">
        Save
      </button>
    </div>
  )
}

export default AddPos

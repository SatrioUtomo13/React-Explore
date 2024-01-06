import { useState } from "react"

export default function Form ({onAddItem}) {
    const [name, setName] = useState('') // state untuk mengelola nilai input
    const [quantity, setQuantity] = useState(1) // state untuk mengelola nilai quantity dari select
  
    function handleSubmit (e) {
      e.preventDefault() // mencegah perilaku default browser
  
      if(!name) return // jika name false, maka keluar dari function
  
      /* 
        - jika nama dan quantity ada isinya, buat objek baru
        - id generate dari tanggal
      */
      const newItem = {
        name,
        quantity,
        checked : false,
        id : Date.now()
      }
  
      onAddItem(newItem)
  
      setName('') // kosongkan namenya
      setQuantity(1) // kosongkan quantitynya
    }
    // buat jumlah quantity didalam option
    // gunakan sperad opeartor untuk melakukan salinan array sebelum mapping
    const quantityNum = [...Array(10)].map((_, i) => (
      <option value={i+1} key={i+1}>
        {i+1}
      </option> 
    ))
  
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
            <h3>Hari ini belanja apa kita?</h3>
            <div>
              {/* 
              - select diisi dengan quantityNum
              - state setQuantity diisi dengan nilai dari value
              - ubah nilai value menjadi number 
              */}
              <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>{quantityNum}</select>
              <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <button>Tambah</button>
          </form>
    )
  }
import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";
import Footer from "./components/Footer";

const groceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems) // state yang diisi dengan items dari groceryItems

  /* 
  - function ini digunakan untuk menambahkan item baru
  - menerima parameter item
  */
  function handleAddItem (item) {
    setItems([...items, item])
  }

  function handleDeleteItem (id) {
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems)
  }

  /* 
  - function ini digunakan untuk merubah value checked menjadi true atau sebaliknya
  - lakukan mapping terhadap items
  - lakukan pengecekan apakah id item sama dengan id yang dikirimkan sebagai parameter
  - jika true maka key checked diisi dengan nilai sebaliknya (true/false)
  - jika tidak sama maka hanya tampilkan item saja
   */
  function handleToggleItem(id) {
    const toggleItem = items.map((item) => (item.id === id ? {...item, checked: !item.checked} : item))
    setItems(toggleItem)
  }

  function handleClearItems() {
    setItems([])
  }

  return (
    <>
      <div className="app">
        <Header />
        <Form onAddItem={handleAddItem}/>
        <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems}/>
        <Footer items={items}/>
      </div>
    </>
  )
}



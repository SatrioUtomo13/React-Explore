export default function Footer ({items}) {
    if(items.length == 0) return <footer className="stats">Daftar masih kosong</footer>
  
    const totalItems = items.length // untuk mencari total barang
    const checkedItems = items.filter((item) => item.checked).length // mencari barang yang checked true
    const precentage = Math.round((checkedItems / totalItems) * 100) // membuat presentase barang yang belum dan sudah selesai
  
    return <footer className="stats">Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({precentage}%)</footer>
  }
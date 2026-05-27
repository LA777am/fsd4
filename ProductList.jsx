import ProductCard from './ProductCard'
const products = [
  {
    id: 1,
    name: "Monitor",
    price: 12000,
    details: "24 inch Full HD Monitor",
    image: '/monitor.jpg'
  },

  {
    id: 2,
    name: "Keyboard",
    price: 1500,
    details: "Mechanical RGB Keyboard",
    image: '/keyboard.jpg'
  },

  {
    id: 3,
    name: "Mouse",
    price: 800,
    details: "Gaming Mouse",
    image: '/mouse.jpg'
  },

  {
    id: 4,
    name: "Printer",
    price: 6500,
    details: "Wireless Inkjet Printer",
    image: '/printer.jpg'
  },

  {
    id: 5,
    name: "CPU",
    price: 45000,
    details: "Intel i7 Gaming CPU",
    image: '/cpu.jpg'
  },

  {
    id: 6,
    name: "Pendrive",
    price: 600,
    details: "64GB High Speed USB 3.2 Pendrive",
    image: '/pendrive.jpg'
  }
]

export default function ProductList() {
  return (
    <div className="product-grid">
       {products.map((items) => (
        <ProductCard
            key={items.id}
            image={items.image}
            price={items.price}
            details={items.details}
            name={items.name}
        />
        ))}
    </div>
  )
}

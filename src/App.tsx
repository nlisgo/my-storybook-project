import { useEffect, useState } from 'react'
import './App.css'
import Products from './components/molecules/Products'

function App() {

  const [foodData, setFoodData] = useState<{ products: {id: number, title: string, price: string}[] }>({
    products: []
  })

  useEffect(() => {
    // Fetch the food.json data
    //fetch('/src/food.json')
    fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
      .then(response => response.json())
      .then(data => setFoodData(data))
      .then(console.log)
  }, [])

  return (
    <>
      <Products products={foodData.products}/>
    </>
  )
}

export default App

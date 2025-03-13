import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Food from './components/molecules/Food'

function App() {
  const [count, setCount] = useState(0)

  const [foodData, setFoodData] = useState<{ burger: string, people: {name: string, surname: string}[] }>({
    burger: '',
    people: []
  })

  useEffect(() => {
    // Fetch the food.json data
    fetch('/src/food.json')
      .then(response => response.json())
      .then(data => setFoodData(data))
      .catch(error => console.error('Error fetching food data:', error))
  }, [])

  return (
    <>
      <Food burger={foodData.burger} people={foodData.people}/>
    </>
  )
}

export default App

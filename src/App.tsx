import { useEffect, useState } from 'react'
import './App.css'
import Food from './components/molecules/Food'

function App() {


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

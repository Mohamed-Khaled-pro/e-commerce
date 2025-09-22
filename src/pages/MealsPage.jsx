import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { filterByArea,filterByCategory } from '../services/mealServices';
import MealCard from '../components/MealCard';
import Loader from "../components/Loader.jsx";

export default function MealsPage() {
  let {category, area} = useParams();
  const [meal,setMeal] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  const fetchMeals = async () => {
    setLoading(true)
    try {
      let res
      if (category) {
        console.log(category)
        res = await filterByCategory(category)
        console.log(res)
        
      } else if (area) {
        console.log(area +"1")
        res = await filterByArea(area)
        console.log(area +"2")
        console.log(res)
      }
      setMeal(res?.meals || [])
    } catch (error) {
      console.error("something went wrong(Meals)", error)
      setMeal([])
    } finally {
      setLoading(false)
    }
  }
  fetchMeals()
}, [category, area])

  if (loading) return <div className="mt-20 text-6xl"><Loader  size="xxl" /></div>;
  return (
    <section className='mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
    {meal.map((item,index) =>(
      <MealCard key={item.idMeal} meal={item} index={index}/>
    ))}
    </section>
  )
}

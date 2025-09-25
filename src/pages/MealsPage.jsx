import  {useEffect, useState } from 'react'
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
        res = await filterByCategory(category)
        
      } else if (area) {
        res = await filterByArea(area)
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

if (loading) 
  return (
    <div className="mt-20 flex justify-center items-center h-[60vh]">
      <Loader size="xxl" />
    </div>
  );
  
  return (
    <section className='mt-26 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
    {meal.map((item,index) =>(
      <MealCard key={item.idMeal} id={item.idMeal} meal={item} index={index}/>
    ))}
    </section>
  )
}

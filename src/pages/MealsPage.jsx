import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { filterByArea, filterByCategory } from '../services/mealServices';
import MealCard from '../components/MealCard';
import Loader from '../components/Loader.jsx';

export default function MealsPage() {
  let { category, area } = useParams(); // Destructuring لجلب category و area
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        let res;
        if (category) {
          // لو فيه category في الـ URL
          res = await filterByCategory(category);
        } else if (area) {
          // لو فيه area في الـ URL
          res = await filterByArea(area);
        }
        console.log('Category:', category);
console.log('Area:', area);
console.log('API Response:', res);
        setMeal(res?.data?.meals || []); // بنستخدم res.data.meals بناءً على TheMealDB API
      } catch (error) {
        console.error('Something went wrong (Meals)', error);
        setMeal([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMeals();
  }, [category, area]); // Dependency array بيعتمد على category و area

  if (loading) return <div className="mt-20 text-6xl"><Loader size="xxl" /></div>;

  return (
    <section className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {meal.map((item, index) => (
        <MealCard key={item.idMeal} meal={item} index={index} />
      ))}
    </section>
  );
}
import MealCard from "./MealCard";

export default function RecommendedCard({ meal, index, id }) {
  
  return <MealCard meal={meal} index={index} id={id} showPopular={true} />;
}

import MealCard from "./MealCard";
import { memo } from "react";

const RecommendedCard = ({ meal, index, id }) => {
  return <MealCard meal={meal} index={index} id={id} showPopular={true} />;
};

export default memo(RecommendedCard);

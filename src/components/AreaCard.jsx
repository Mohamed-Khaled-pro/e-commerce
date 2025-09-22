import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

const AreaCard = ({ area }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/meals/area/${area.strArea}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group flex items-center justify-between gap-2 w-full px-5 py-2 
      rounded-2xl bg-white border border-gray-200 
      hover:border-orange-700 hover:bg-orange-50
      cursor-pointer shadow-sm hover:shadow-lg 
      transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-700 text-white group-hover:scale-110 transition-transform duration-300">
          <MapPin className="w-5 h-5" />
        </div>
        <span className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
          {area.strArea}
        </span>
      </div>
      <ArrowRight className="w-5 h-5 text-orange-700 group-hover:translate-x-1 transition-transform duration-300" />
    </div>
  );
};

export default AreaCard;

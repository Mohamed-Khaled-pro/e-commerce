import { Star } from "lucide-react";
import { Link } from "react-router";
export default function Reviews() {
  const reviews = [
  {
    id: 1,
    userName: "Ahmed Ali",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
    dish: "Brown Stew Chicken",
    rating: 5,
    comment: "Amazing! The spices were perfectly balanced and the chicken was so tender."
  },
  {
    id: 2,
    userName: "Sara Mohamed",
    profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
    dish: "Kumpir",
    rating: 4,
    comment: "The baked potato was delicious and well-filled, but a bit too cheesy for me."
  },
  {
    id: 3,
    userName: "John Smith",
    profilePic: "https://randomuser.me/api/portraits/men/33.jpg",
    dish: "Irish Stew",
    rating: 5,
    comment: "Perfect comfort food. The meat was tender and the vegetables were soft and flavorful."
  },
  {
    id: 4,
    userName: "Mona Hassan",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    dish: "Kung Pao Chicken",
    rating: 4,
    comment: "Spicy and tasty! Could be a bit less hot, but I loved it overall."
  },
  {
    id: 5,
    userName: "David Lee",
    profilePic: "https://randomuser.me/api/portraits/men/55.jpg",
    dish: "Chicken Karaage",
    rating: 5,
    comment: "Crispy outside, juicy inside. One of the best fried chicken dishes I’ve ever tried."
  },
  {
    id: 6,
    userName: "Emily Brown",
    profilePic: "https://randomuser.me/api/portraits/women/66.jpg",
    dish: "Eccles Cake",
    rating: 3,
    comment: "The filling was sweet and nice, but the pastry felt a bit dry."
  },
  {
    id: 7,
    userName: "Omar Khaled",
    profilePic: "https://randomuser.me/api/portraits/men/77.jpg",
    dish: "Shawarma",
    rating: 5,
    comment: "Delicious! Authentic flavor just like the Middle Eastern street food."
  },
  {
    id: 8,
    userName: "Hannah Wilson",
    profilePic: "https://randomuser.me/api/portraits/women/88.jpg",
    dish: "Brown Stew Chicken",
    rating: 4,
    comment: "Really tasty dish, would be perfect if served with some plain rice on the side."
  }
]
  
   return (
    <div className="min-h-screen  my-20 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 relative p-3">
          What People Say About Our Recipes
          <span className="absolute left-1/2  transform -translate-x-1/2 bottom-0 w-1/3 h-1 bg-orange-700 rounded-full "></span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our dishes from around the world have been tried, tested, and loved
          by food lovers everywhere. Here’s what some of them had to say.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gradient-to-t from-55% from-white to-orange-700 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center"
          >
            <img
              src={review.profilePic}
              alt={review.userName}
              className="w-20 h-20 rounded-full border-4 border-orange-200 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {review.userName}
            </h3>
            <p className="text-md text-orange-700 font-bold mb-2">
              {review.dish}
            </p>

            <div className="flex justify-center mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={`${
                    i < review.rating
                      ? "fill-orange-700 text-orange-700"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <p className="text-gray-800 text-sm mb-4">{review.comment}</p>

            <Link
              to={review.link}
              className="mt-auto inline-block bg-orange-700 hover:bg-black/80 text-white text-sm font-medium px-4 py-2 rounded-full transition"
            >
              View Dish
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

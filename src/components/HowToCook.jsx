// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function HowToCook() {
  // Fake data
  const recipe = {
    title: "Spaghetti Carbonara",
    description: "A quick and delicious Italian pasta recipe perfect for dinner.",
    videoUrl: "https://www.youtube.com/embed/3AAdKl1UYZs?autoplay=1&mute=1",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 eggs",
      "50g grated parmesan",
      "2 cloves garlic",
      "Salt & black pepper",
    ],
    steps: [
      "Boil pasta in salted water until al dente.",
      "Fry pancetta with garlic until crispy.",
      "Beat eggs with parmesan in a bowl.",
      "Drain pasta, add to pancetta, and remove from heat.",
      "Quickly stir in the egg mixture and season with pepper.",
      "Serve with extra parmesan on top.",
    ],
    time: "25 mins",
    level: "Easy",
    servings: 2,
  };

  return (
    <motion.div
      className="w-full mx-auto mb-20 md:mb-28 md:mt-10 text-gray-900 rounded-2xl p-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
     <div className="text-center flex flex-col items-center mb-12 space-y-3">
  <motion.h2
    className="text-2xl md:text-4xl font-bold text-orange-700 relative p-2"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {recipe.title}
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-48 h-1 bg-orange-700 rounded-full mt-2"></span>
  </motion.h2>

  {/* Mention Tag */}
  <div>
    <span className="px-4 py-1 text-sm md:text-base font-semibold text-white bg-orange-700 rounded-full shadow-md">
      ⭐ Best Meal of the Week
    </span>
  </div>

  <p className="text-gray-700 italic mt-4 max-w-2xl">
    {recipe.description}
  </p>
</div>


      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="w-full h-96 aspect-video rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src={recipe.videoUrl}
            title={recipe.title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        <div className="rounded-2xl h-96 overflow-y-auto shadow p-6 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-orange-700 mb-3">
              Ingredients
            </h2>
            <ul className="list-disc text-lg list-inside text-gray-800 space-y-2">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-orange-700 mb-3">
              Steps
            </h2>
            <ol className="list-decimal text-lg list-inside text-gray-800 space-y-2">
              {recipe.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600">
            <span className="bg-orange-100 px-3 py-1 rounded-full">
              ⏱ {recipe.time}
            </span>
            <span className="bg-orange-100 px-3 py-1 rounded-full">
              👨‍🍳 {recipe.level}
            </span>
            <span className="bg-orange-100 px-3 py-1 rounded-full">
              🍽 Serves: {recipe.servings}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

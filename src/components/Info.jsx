import { Globe, BookOpen, Video } from "lucide-react"; 

export default function Info() {
  return (
 <div className="grid md:grid-cols-3 gap-6 my-30 px-6">
          <div className=" p-6 rounded-xl group  hover:text-white text-gray-700shadow-sm text-center py-8 hover:scale-105 cursor-pointer hover:transition-all duration-500 hover:bg-orange-700">
            <Globe className="mx-auto group-hover:text-white text-orange-700 w-10 h-10 " />
            <h4 className="font-semibold text-lg mt-2">Global Recipes</h4>
            <p className=" mt-2 group-hover:text-gray-300">
              Discover authentic recipes from over 50 countries, each with detailed
              ingredients and step-by-step instructions.
            </p>
          </div>

          <div className=" p-6 rounded-xl hover:text-white group text-gray-700 shadow-sm text-center hover:scale-105 cursor-pointer hover:transition-all duration-500 hover:bg-orange-700">
            <BookOpen className="mx-auto group-hover:text-white text-orange-700  w-10 h-10 " /> 
            <h4 className="font-semibold text-lg mt-2">Learn Techniques</h4>
            <p className=" mt-2 group-hover:text-gray-300">
              Master traditional cooking methods and techniques passed down through
              generations of skilled chefs.
            </p>
          </div>

          <div className=" p-6 rounded-xl group hover:text-white text-gray-700 shadow-sm text-center hover:scale-105 cursor-pointer hover:transition-all duration-500 hover:bg-orange-700">
            <Video className="mx-auto group-hover:text-white text-orange-700 w-10 h-10 " />
            <h4 className="font-semibold text-lg mt-2">Video Tutorials</h4>
            <p className=" mt-2 group-hover:text-gray-300">
              Watch step-by-step video guides for each recipe, making it easy to
              follow along and master every dish.
            </p>
          </div>
        </div>  )
}

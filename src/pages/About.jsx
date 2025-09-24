import { Globe, BookOpen, Video } from "lucide-react"; 
import Info from "../components/Info";

export default function About() {
  return (
    <section className="min-h-screen bg-orange-50 flex items-center justify-center">
      <div className="container mx-auto py-16 px-6 md:px-16 mt-14">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-4 relative p-2">
          About Meal Map
          <span className="absolute left-1/2  transform -translate-x-1/2 bottom-0 w-1/4 h-1 bg-orange-700 rounded-full "></span>
        </h2>
        <p className="text-gray-600 text-lg">
          Discover the world through food. Explore authentic recipes, learn traditional
          cooking techniques, and embark on a culinary journey across cultures.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
        <div className=" p-6 rounded-xl shadow-sm space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-600 mb-4 tracking-wide leading-7 text-lg my-4">
            At Meal Map, we believe food is the universal language that connects us all. 
            Our platform brings together authentic recipes from every corner of the globe, 
            allowing you to explore diverse culinary traditions from the comfort of your kitchen.
          </p>
          <p className="text-gray-600 tracking-wide leading-7 text-lg my-4">
            Whether you're craving the spicy warmth of Indian curry, the delicate flavors of 
            Japanese sushi, or the hearty comfort of Italian pasta, we're here to guide your 
            culinary adventure.
          </p>
          <button className='btn btn-primary'>Show more</button>
        </div>

        <div>
          <img
            src="/assets/About-hero-cooking.jpg"
            alt="Meal dishes"
            className="rounded-xl shadow-md h-[364px] w-full object-cover"
          />
        </div>
      </div>

    <Info />
    </div>
    </section>
  )
}

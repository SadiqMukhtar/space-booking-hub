import { SearchBar } from "@/features/venues/components/SearchBar";
import { CategoryCard } from "@/features/venues/components/CategoryCard";
import { venueCategories } from "@/features/venues/data/categories";

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/70" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-8">
        {/* Hero Text */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center text-white animate-fadeIn tracking-tight">
          Book Your Indoor Football Pitch
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center text-gray-300 max-w-2xl mx-auto animate-fadeIn">
          Find and book professional indoor football facilities for your team
        </p>

        <SearchBar />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
          {venueCategories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
              venues={category.venues}
            />
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Why Choose Our Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-white">Real-time Availability</h3>
              <p className="text-gray-300">Check pitch availability instantly and book your preferred time slot</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-white">Professional Facilities</h3>
              <p className="text-gray-300">High-quality indoor pitches with modern amenities and equipment</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-white">Easy Scheduling</h3>
              <p className="text-gray-300">Organize matches and invite teams with our scheduling system</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
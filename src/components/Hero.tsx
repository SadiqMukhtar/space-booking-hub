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
          backgroundImage: "url('https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/70" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-8">
        {/* Hero Text */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center text-white animate-fadeIn tracking-tight">
          Book Your Perfect Pitch
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-center text-gray-300 max-w-2xl mx-auto animate-fadeIn">
          Find and book indoor football fields for your team
        </p>

        <SearchBar />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {venueCategories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
              venues={category.venues}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
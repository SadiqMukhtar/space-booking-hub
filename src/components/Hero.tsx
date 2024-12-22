import { SearchBar } from "@/features/venues/components/SearchBar";
import { CategoryCard } from "@/features/venues/components/CategoryCard";
import { FeaturedVenues } from "@/components/FeaturedVenues";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const Hero = () => {
  const navigate = useNavigate();

  const handleQuickBook = () => {
    toast.info("Quick booking feature coming soon!");
  };

  const handleBookNow = () => {
    navigate('/venues');
  };

  return (
    <>
      <div className="relative min-h-screen">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="pt-8 pb-12">
            <SearchBar />
          </div>

          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white animate-fadeIn tracking-tight">
              Indoor Football Pitch Booking
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 animate-fadeIn">
              Find and book available indoor football facilities
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                variant="secondary" 
                className="group"
                onClick={handleQuickBook}
              >
                <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Quick Book
              </Button>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90"
                onClick={handleBookNow}
              >
                Book Now
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Real-time availability</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>All pitch sizes</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Multiple locations</span>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-medium text-white mb-8 text-center">Available Pitches</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pitchCategories.map((category) => (
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
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-medium text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-lg bg-gray-50">
                <feature.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const pitchCategories = [
  {
    title: "5-a-side",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2071&auto=format&fit=crop",
    venues: ["Pitch A", "Pitch B", "Pitch C"]
  },
  {
    title: "7-a-side",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2069&auto=format&fit=crop",
    venues: ["Pitch D", "Pitch E", "Pitch F"]
  },
  {
    title: "Training Area",
    image: "https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=2070&auto=format&fit=crop",
    venues: ["Area 1", "Area 2", "Area 3"]
  }
];

const features = [
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Simple process to find and book available pitches"
  },
  {
    icon: Users,
    title: "All Sizes",
    description: "Suitable pitches for different team sizes"
  },
  {
    icon: MapPin,
    title: "Locations",
    description: "Find pitches in your preferred area"
  }
];
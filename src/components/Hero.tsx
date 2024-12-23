import { SearchBar } from "@/features/venues/components/SearchBar";
import { FeaturedVenues } from "@/components/FeaturedVenues";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const Hero = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/venues');
  };

  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)"
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Search Section at the top */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">Find Your Perfect Pitch</h2>
            <SearchBar />
          </div>

          {/* Main Content */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Indoor Football Pitch Booking
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Quick and easy booking for your next game
            </p>
            
            <Button 
              size="lg"
              onClick={handleBookNow}
              className="bg-accent hover:bg-accent/90"
            >
              Book Now
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white text-center"
              >
                <feature.icon className="w-10 h-10 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-200 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Venues Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Available Pitches</h2>
          <FeaturedVenues />
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: Calendar,
    title: "Instant Booking",
    description: "Book your preferred pitch instantly with real-time availability"
  },
  {
    icon: Users,
    title: "All Team Sizes",
    description: "Suitable for 5-a-side, 7-a-side, and training sessions"
  },
  {
    icon: MapPin,
    title: "Multiple Locations",
    description: "Find pitches near you with our location-based search"
  }
];
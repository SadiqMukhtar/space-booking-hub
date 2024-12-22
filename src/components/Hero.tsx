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
    // This would typically open a quick booking modal or redirect to a simplified booking form
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
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-28 pb-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fadeIn tracking-tight">
              Book Your Perfect Indoor Football Pitch
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto animate-fadeIn">
              Find and book professional indoor football facilities for your team
            </p>
            
            {/* Adding Quick Book and Book Now buttons */}
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
                variant="default"
                className="bg-accent hover:bg-accent/90"
                onClick={handleBookNow}
              >
                Book Now
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Real-time availability</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>All team sizes</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Premium locations</span>
              </div>
            </div>
          </div>

          <SearchBar />

          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Popular Indoor Pitches</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <feature.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
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
    title: "5-A-Side Premium",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2071&auto=format&fit=crop",
    venues: ["Elite Arena", "Pro Court", "Champions Field"]
  },
  {
    title: "7-A-Side Professional",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2069&auto=format&fit=crop",
    venues: ["Victory Ground", "Premier Pitch", "Legend's Arena"]
  },
  {
    title: "Training Facilities",
    image: "https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=2070&auto=format&fit=crop",
    venues: ["Skills Center", "Pro Training Ground", "Development Hub"]
  }
];

const features = [
  {
    icon: Calendar,
    title: "Instant Booking",
    description: "Book your preferred pitch in real-time with our easy-to-use platform."
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Organize your team, schedule matches, and manage bookings efficiently."
  },
  {
    icon: MapPin,
    title: "Premium Locations",
    description: "Access top-quality indoor football facilities in prime locations."
  }
];
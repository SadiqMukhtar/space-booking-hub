import { SearchBar } from "@/features/venues/components/SearchBar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900/90 to-gray-900"
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.4"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fadeIn">
            Find Your Perfect Space
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 animate-fadeIn">
            Book sports venues, event centers, and hotels with ease
          </p>

          {/* Search Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mb-12 shadow-lg animate-fadeIn">
            <SearchBar />
          </div>

          {/* Venue Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Sports Venues Card */}
            <div className="group relative overflow-hidden rounded-xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2070" 
                alt="Sports Venue"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Sports Venues</h3>
                <Button 
                  onClick={() => navigate('/venues/sports')}
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  View Available Venues
                </Button>
              </div>
            </div>

            {/* Event Centers Card */}
            <div className="group relative overflow-hidden rounded-xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070" 
                alt="Event Center"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Event Centers</h3>
                <Button 
                  onClick={() => navigate('/venues/events')}
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  View Available Venues
                </Button>
              </div>
            </div>

            {/* Hotels Card */}
            <div className="group relative overflow-hidden rounded-xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070" 
                alt="Hotel"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Hotels</h3>
                <Button 
                  onClick={() => navigate('/venues/hotels')}
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  View Available Venues
                </Button>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Instant Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Book your preferred venue instantly with real-time availability checking</p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Secure Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Safe and secure payment processing with multiple payment options</p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Round-the-clock customer support for all your booking needs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
import { SearchBar } from "@/features/venues/components/SearchBar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Hero = () => {
  const navigate = useNavigate();

  const pitchTypes = {
    fiveASide: [
      "Pro Turf Arena - 5-a-side",
      "Elite Indoor 5s",
      "Urban Football 5s"
    ],
    sevenASide: [
      "Premier 7s Ground",
      "Victory 7-a-side Field",
      "Champions League 7s"
    ],
    elevenASide: [
      "Professional Stadium",
      "National League Ground",
      "Olympic Standard Field"
    ]
  };

  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900/90 to-gray-900"
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.4"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fadeIn">
            Find Your Perfect Football Pitch
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 animate-fadeIn">
            Book a pitch from anywhere in the world easily
          </p>

          {/* Search Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mb-12 shadow-lg animate-fadeIn">
            <SearchBar />
          </div>

          {/* Pitch Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* 5-a-side Card */}
            <div className="group relative overflow-hidden rounded-xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1577223625816-7546f13df25d" 
                alt="5-a-side Pitch"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">5-a-side Pitches</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                    >
                      View Available Pitches
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {pitchTypes.fiveASide.map((pitch) => (
                      <DropdownMenuItem 
                        key={pitch}
                        onClick={() => navigate(`/venues/5-a-side/${pitch}`)}
                      >
                        {pitch}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* 7-a-side Card */}
            <div className="group relative overflow-hidden rounded-xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1459865264687-595d652de67e" 
                alt="7-a-side Pitch"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">7-a-side Pitches</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                    >
                      View Available Pitches
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {pitchTypes.sevenASide.map((pitch) => (
                      <DropdownMenuItem 
                        key={pitch}
                        onClick={() => navigate(`/venues/7-a-side/${pitch}`)}
                      >
                        {pitch}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* 11-a-side Card */}
            <div className="group relative overflow-hidden rounded-xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9" 
                alt="11-a-side Pitch"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">11-a-side Pitches</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                    >
                      View Available Pitches
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {pitchTypes.elevenASide.map((pitch) => (
                      <DropdownMenuItem 
                        key={pitch}
                        onClick={() => navigate(`/venues/11-a-side/${pitch}`)}
                      >
                        {pitch}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Instant Booking</h3>
              <p className="text-gray-600">Book your preferred pitch instantly with real-time availability checking</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Secure Payments</h3>
              <p className="text-gray-600">Safe and secure payment processing with multiple payment options</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your booking needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
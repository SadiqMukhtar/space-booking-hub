import { SearchBar } from "@/features/venues/components/SearchBar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[600px]">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)"
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Book Your Indoor Football Pitch
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Find and book the perfect indoor football pitch near you
          </p>

          {/* Search Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
            <SearchBar />
          </div>

          <div className="flex justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => navigate('/venues')}
              className="bg-accent hover:bg-accent/90"
            >
              Browse All Venues
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30")',
          filter: 'brightness(0.4)'
        }}
      />
      
      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-7xl md:text-9xl font-display font-bold mb-8 animate-fadeIn tracking-tight uppercase">
          Welcome to Space
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto animate-fadeIn font-light">
          Your Premier Destination for Venue Bookings
        </p>
        
        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-none p-3 flex items-center border border-white/20">
          <Input
            type="text"
            placeholder="Search for venues..."
            className="border-0 focus-visible:ring-0 bg-transparent text-white placeholder:text-white/70"
          />
          <Button size="lg" className="ml-2 bg-accent hover:bg-accent/90 rounded-none">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
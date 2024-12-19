import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Find Your Perfect Space
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fadeIn">
          Book sports venues, event centers, and hotels with ease
        </p>
        
        <div className="max-w-md mx-auto bg-white rounded-lg p-2 flex items-center">
          <Input
            type="text"
            placeholder="Search for venues..."
            className="border-0 focus-visible:ring-0"
          />
          <Button size="sm" className="ml-2">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
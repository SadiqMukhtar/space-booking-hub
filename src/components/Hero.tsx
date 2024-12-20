import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const categories = [
    {
      title: "Sports Venues",
      image: "https://images.unsplash.com/photo-1459865264687-595d652de67e",
      venues: ["Football Pitch A", "Tennis Court 1", "Basketball Court", "Indoor Soccer Field"]
    },
    {
      title: "Event Centers",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
      venues: ["Grand Ballroom", "Conference Hall", "Wedding Venue", "Exhibition Space"]
    },
    {
      title: "Hotels",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      venues: ["Luxury Suite Hotel", "Business Hotel", "Boutique Hotel", "Resort & Spa"]
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/70" />
      </div>

      {/* Search Bar Section */}
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-8">
        <div className="max-w-xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 flex items-center border border-white/20">
            <Input
              type="text"
              placeholder="Search for venues by name or location..."
              className="border-0 focus-visible:ring-0 bg-transparent text-white placeholder:text-white/70"
            />
            <Button size="lg" className="ml-2 bg-accent hover:bg-accent/90">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center text-white animate-fadeIn tracking-tight">
          Find Your Perfect Space
        </h1>
        <p className="text-xl md:text-2xl mb-16 text-center text-gray-300 max-w-2xl mx-auto animate-fadeIn">
          Book sports venues, event centers, and hotels with ease
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => (
            <div key={category.title} className="relative group">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="secondary" 
                          className="w-full justify-between bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20"
                        >
                          View Available Venues
                          <ChevronDown className="h-4 w-4 ml-2" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[240px] bg-white/95 backdrop-blur-md">
                        {category.venues.map((venue) => (
                          <DropdownMenuItem key={venue} className="cursor-pointer">
                            {venue}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
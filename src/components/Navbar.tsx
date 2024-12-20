import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="text-3xl font-display font-bold text-white uppercase">
          Space
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="font-medium flex items-center gap-2 text-white hover:text-accent transition-colors uppercase"
              >
                Venues <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-black/90 backdrop-blur-md border border-white/10 rounded-none">
              <DropdownMenuItem className="text-white hover:bg-white/10 focus:bg-white/10 rounded-none">
                <Link to="/venues/sports" className="w-full uppercase">Sports Venues</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-white/10 focus:bg-white/10 rounded-none">
                <Link to="/venues/events" className="w-full uppercase">Event Centers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-white/10 focus:bg-white/10 rounded-none">
                <Link to="/venues/hotels" className="w-full uppercase">Hotels</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/about" className="text-white hover:text-accent transition-colors font-medium uppercase">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-accent transition-colors font-medium uppercase">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden md:flex text-white hover:text-accent hover:bg-transparent uppercase"
          >
            List your space
          </Button>
          <Button 
            variant="default" 
            size="lg" 
            className="bg-accent hover:bg-accent/90 rounded-none uppercase"
          >
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
};
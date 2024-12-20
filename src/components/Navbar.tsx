import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-white">
          Space
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="font-medium flex items-center gap-2 text-white hover:text-accent/90 transition-colors"
              >
                Venues <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white/95 backdrop-blur-md">
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/venues/sports" className="w-full">Sports Venues</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/venues/events" className="w-full">Event Centers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/venues/hotels" className="w-full">Hotels</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/about" className="text-white hover:text-accent/90 transition-colors font-medium">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-accent/90 transition-colors font-medium">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden md:flex text-white hover:text-accent/90 hover:bg-white/5"
          >
            List your space
          </Button>
          <Button 
            variant="default" 
            size="lg" 
            className="bg-accent hover:bg-accent/90"
          >
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
};
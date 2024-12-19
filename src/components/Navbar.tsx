import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
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
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Space
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="font-medium flex items-center gap-2 hover:text-primary transition-colors"
              >
                Venues <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white">
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

          <Link to="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex hover:text-primary hover:bg-primary/5">
            List your space
          </Button>
          <Button variant="default" size="lg" className="bg-accent hover:bg-accent/90">
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
};
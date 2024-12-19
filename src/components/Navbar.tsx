import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          Space
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/venues" className="text-gray-600 hover:text-primary transition-colors">
            Venues
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            List your space
          </Button>
          <Button variant="default" size="sm">
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
};
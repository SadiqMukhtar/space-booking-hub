import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface CategoryCardProps {
  title: string;
  image: string;
  venues: string[];
}

export const CategoryCard = ({ title, image, venues }: CategoryCardProps) => {
  return (
    <div className="relative group transform transition-all duration-300 hover:scale-105">
      <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                Available Now
              </Badge>
            </div>
            <p className="text-sm text-gray-300 mb-3">
              Professional {title} with high-quality turf and modern facilities
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="secondary" 
                  className="w-full justify-between bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20"
                >
                  View Available Pitches
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[240px] bg-white/95 backdrop-blur-md">
                {venues.map((venue) => (
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
  );
};
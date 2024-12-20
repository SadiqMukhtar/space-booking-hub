import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CategoryCardProps {
  title: string;
  image: string;
  venues: string[];
}

export const CategoryCard = ({ title, image, venues }: CategoryCardProps) => {
  return (
    <div className="relative group">
      <div className="relative h-[300px] rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
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
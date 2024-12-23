import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="relative flex-1">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
        <Input
          type="text"
          placeholder="Enter location"
          className="pl-10 w-full"
        />
      </div>
      
      <div className="relative flex-1">
        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
        <Input
          type="date"
          className="pl-10 w-full"
        />
      </div>

      <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
        <Search className="h-5 w-5" />
        Search
      </Button>
    </div>
  );
};
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input
          type="text"
          placeholder="Enter location to find pitches..."
          className="pl-10"
        />
      </div>
      
      <div className="relative w-full md:w-[200px]">
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input
          type="date"
          className="pl-10"
        />
      </div>

      <div className="w-full md:w-[180px]">
        <Select>
          <SelectTrigger>
            <Users className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Pitch Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5-a-side</SelectItem>
            <SelectItem value="7">7-a-side</SelectItem>
            <SelectItem value="11">11-a-side</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button 
        className="bg-accent hover:bg-accent/90 w-full md:w-auto"
      >
        <Search className="h-4 w-4 mr-2" />
        Find Pitches
      </Button>
    </div>
  );
};
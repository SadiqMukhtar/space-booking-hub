import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
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
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" />
        <Input
          type="text"
          placeholder="Enter location..."
          className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 w-full"
        />
      </div>
      
      <Select>
        <SelectTrigger className="w-full md:w-[180px] bg-white/10 border-white/20 text-white">
          <SelectValue placeholder="Pitch Size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="5">5-A-Side</SelectItem>
          <SelectItem value="7">7-A-Side</SelectItem>
          <SelectItem value="training">Training Area</SelectItem>
        </SelectContent>
      </Select>

      <Button className="bg-accent hover:bg-accent/90">
        <Search className="h-4 w-4 mr-2" />
        Search Pitches
      </Button>
    </div>
  );
};
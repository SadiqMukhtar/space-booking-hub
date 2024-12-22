import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Users } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SearchBar = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex flex-col md:flex-row items-center gap-4 border border-white/20">
        <div className="flex-1 w-full">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" />
            <Input
              type="text"
              placeholder="Search by location or venue name..."
              className="pl-10 border-0 focus-visible:ring-0 bg-transparent text-white placeholder:text-white/70 w-full"
            />
          </div>
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

        <Button size="lg" className="w-full md:w-auto bg-accent hover:bg-accent/90">
          Find Pitches
        </Button>
      </div>
    </div>
  );
};
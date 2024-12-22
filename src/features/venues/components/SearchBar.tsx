import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SearchBar = () => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by location..."
            className="pl-10 bg-white/90 border-0"
          />
        </div>
        <Select>
          <SelectTrigger className="w-full md:w-[180px] bg-white/90 border-0">
            <SelectValue placeholder="Pitch Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5-a-side</SelectItem>
            <SelectItem value="7">7-a-side</SelectItem>
            <SelectItem value="11">11-a-side</SelectItem>
          </SelectContent>
        </Select>
        <Button className="bg-accent hover:bg-accent/90">
          Find Pitch
        </Button>
      </div>
    </div>
  );
};
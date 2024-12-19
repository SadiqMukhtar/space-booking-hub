import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface VenueSearchProps {
  onSearch: (query: string) => void;
}

const VenueSearch = ({ onSearch }: VenueSearchProps) => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Input
        type="text"
        placeholder="Search venues..."
        className="pl-10"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
    </div>
  );
};

export default VenueSearch;
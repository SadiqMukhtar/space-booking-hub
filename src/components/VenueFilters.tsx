import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface VenueFiltersProps {
  onFilterChange: (filters: VenueFilters) => void;
}

export interface VenueFilters {
  type: string;
  priceRange: string;
}

const VenueFilters = ({ onFilterChange }: VenueFiltersProps) => {
  const handleFilterChange = (key: keyof VenueFilters, value: string) => {
    onFilterChange({ type: "", priceRange: "", [key]: value });
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white rounded-lg shadow-sm">
      <Select onValueChange={(value) => handleFilterChange("type", value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Venue Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="sports">Sports Venue</SelectItem>
          <SelectItem value="event">Event Center</SelectItem>
          <SelectItem value="hotel">Hotel</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilterChange("priceRange", value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Price Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="budget">Budget</SelectItem>
          <SelectItem value="mid">Mid-Range</SelectItem>
          <SelectItem value="luxury">Luxury</SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        onClick={() => onFilterChange({ type: "", priceRange: "" })}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default VenueFilters;
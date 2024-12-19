import React, { useState } from "react";
import VenueSearch from "@/components/VenueSearch";
import VenueFilters, { VenueFilters as FilterTypes } from "@/components/VenueFilters";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Venue {
  id: string;
  name: string;
  type: string;
  priceRange: string;
  description: string;
  image: string;
}

const mockVenues: Venue[] = [
  {
    id: "1",
    name: "Central Sports Complex",
    type: "sports",
    priceRange: "mid",
    description: "Modern sports facility with multiple courts",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Grand Event Center",
    type: "event",
    priceRange: "luxury",
    description: "Elegant venue for special occasions",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Comfort Inn Hotel",
    type: "hotel",
    priceRange: "budget",
    description: "Comfortable and affordable accommodation",
    image: "/placeholder.svg",
  },
];

const Venues = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterTypes>({
    type: "",
    priceRange: "",
  });

  const filteredVenues = mockVenues.filter((venue) => {
    const matchesSearch = venue.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType = !filters.type || venue.type === filters.type;
    const matchesPriceRange =
      !filters.priceRange || venue.priceRange === filters.priceRange;
    return matchesSearch && matchesType && matchesPriceRange;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <VenueSearch onSearch={setSearchQuery} />
        <VenueFilters onFilterChange={setFilters} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVenues.map((venue) => (
            <Card key={venue.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="mt-4">{venue.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{venue.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="capitalize text-sm font-medium">
                    {venue.type}
                  </span>
                  <span className="capitalize text-sm text-gray-500">
                    {venue.priceRange}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Venues;
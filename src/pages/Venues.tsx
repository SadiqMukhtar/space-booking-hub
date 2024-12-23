import { useState } from "react";
import VenueSearch from "@/components/VenueSearch";
import VenueFilters, { VenueFilters as FilterTypes } from "@/components/VenueFilters";
import { VenueCard } from "@/components/VenueCard";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const mockVenues = [
  {
    id: "1",
    name: "Central Indoor Arena",
    location: "Downtown Sports Complex",
    price: "$80/hour",
    image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d",
    availability: "Available",
  },
  {
    id: "2",
    name: "Pro Football Center",
    location: "Midtown",
    price: "$95/hour",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68",
    availability: "Available",
  },
  {
    id: "3",
    name: "Elite Sports Hub",
    location: "Westside",
    price: "$75/hour",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e",
    availability: "Available",
  },
];

const Venues = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterTypes>({
    type: "",
    priceRange: "",
  });

  const filteredVenues = mockVenues.filter((venue) => {
    const matchesSearch = venue.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType = !filters.type || true; // Implement actual filtering logic
    const matchesPriceRange = !filters.priceRange || true; // Implement actual filtering logic
    return matchesSearch && matchesType && matchesPriceRange;
  });

  const handleBook = (id: string) => {
    toast.success("Booking feature coming soon!");
    // Implement booking logic
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Available Venues</h1>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3">
            <VenueSearch onSearch={setSearchQuery} />
          </div>
          <div className="w-full md:w-1/3">
            <VenueFilters onFilterChange={setFilters} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVenues.map((venue) => (
            <VenueCard 
              key={venue.id} 
              venue={venue} 
              onBook={handleBook}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Venues;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock } from "lucide-react";

interface VenueCardProps {
  venue: {
    id: string;
    name: string;
    location: string;
    price: string;
    image: string;
    availability: string;
  };
  onBook: (id: string) => void;
}

export const VenueCard = ({ venue, onBook }: VenueCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={venue.image}
          alt={venue.name}
          className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{venue.name}</CardTitle>
          <Badge variant="secondary">{venue.availability}</Badge>
        </div>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <MapPin className="h-4 w-4 mr-1" />
          {venue.location}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            Available Now
          </div>
          <span className="text-lg font-semibold">{venue.price}</span>
        </div>
        
        <Button 
          className="w-full bg-accent hover:bg-accent/90"
          onClick={() => onBook(venue.id)}
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};
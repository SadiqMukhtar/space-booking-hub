import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import BookingForm from "@/components/BookingForm";

interface VenueDetails {
  id: string;
  name: string;
  type: string;
  priceRange: string;
  description: string;
  image: string;
  fullDescription: string;
  amenities: string[];
  pricePerHour: number;
  location: string;
  capacity: number;
}

const mockVenueDetails: Record<string, VenueDetails> = {
  "1": {
    id: "1",
    name: "Central Sports Complex",
    type: "sports",
    priceRange: "mid",
    description: "Modern sports facility with multiple courts",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&auto=format&fit=crop",
    fullDescription: "State-of-the-art sports facility featuring multiple courts, professional equipment, and excellent amenities. Perfect for both casual games and professional training sessions.",
    amenities: ["Changing Rooms", "Showers", "Equipment Rental", "Parking", "Cafe"],
    pricePerHour: 75,
    location: "123 Sports Avenue, Downtown",
    capacity: 100
  },
  "2": {
    id: "2",
    name: "Grand Event Center",
    type: "event",
    priceRange: "luxury",
    description: "Elegant venue for special occasions",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop",
    fullDescription: "Luxurious event center perfect for weddings, corporate events, and special celebrations. Features modern architecture and premium facilities.",
    amenities: ["Full Kitchen", "AV Equipment", "Stage", "VIP Rooms", "Valet Parking"],
    pricePerHour: 200,
    location: "456 Celebration Road, Uptown",
    capacity: 500
  }
};

const VenueDetails = () => {
  const { id } = useParams();
  const venue = mockVenueDetails[id || "1"];
  const [showBookingForm, setShowBookingForm] = useState(false);

  if (!venue) {
    return <div>Venue not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <img
            src={venue.image}
            alt={venue.name}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
          <Card>
            <CardHeader>
              <CardTitle>About this venue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{venue.fullDescription}</p>
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Amenities</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {venue.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{venue.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-bold">${venue.pricePerHour}/hour</p>
                  <p className="text-gray-500">Capacity: {venue.capacity} people</p>
                </div>
                <p className="text-gray-600">{venue.location}</p>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => setShowBookingForm(!showBookingForm)}
                >
                  <Calendar className="mr-2" />
                  {showBookingForm ? "Hide Booking Form" : "Book Now"}
                </Button>
              </div>
              {showBookingForm && (
                <div className="mt-6">
                  <BookingForm
                    venueId={venue.id}
                    venueName={venue.name}
                    pricePerHour={venue.pricePerHour}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const venues = [
  {
    id: 1,
    name: "Grand Sports Arena",
    type: "Sports Venue",
    location: "Downtown",
    price: "$100/hour",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    id: 2,
    name: "The Royal Event Center",
    type: "Event Center",
    location: "Midtown",
    price: "$500/day",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
  },
  {
    id: 3,
    name: "Luxury Hotel & Suites",
    type: "Hotel",
    location: "Uptown",
    price: "$200/night",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
  },
];

export const FeaturedVenues = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/venues');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Featured Venues
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Discover our handpicked selection of premium venues for your next event
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue) => (
            <Card key={venue.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 bg-white/50 backdrop-blur-sm">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{venue.name}</CardTitle>
                <CardDescription className="text-gray-600">{venue.type} • {venue.location}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {venue.price}
                </p>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full bg-accent hover:bg-accent/90"
                  onClick={handleBookNow}
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

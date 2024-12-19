import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const venues = [
  {
    id: 1,
    name: "Grand Sports Arena",
    type: "Sports Venue",
    location: "Downtown",
    price: "$100/hour",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: 2,
    name: "The Royal Event Center",
    type: "Event Center",
    location: "Midtown",
    price: "$500/day",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: 3,
    name: "Luxury Hotel & Suites",
    type: "Hotel",
    location: "Uptown",
    price: "$200/night",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
];

export const FeaturedVenues = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Venues</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue) => (
            <Card key={venue.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{venue.name}</CardTitle>
                <CardDescription>{venue.type} • {venue.location}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-lg font-semibold text-primary">
                  {venue.price}
                </p>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full">Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
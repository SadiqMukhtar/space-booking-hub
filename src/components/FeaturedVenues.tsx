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
    name: "Sports Arena",
    type: "Sports Venue",
    description: "Modern sports facility with multiple courts",
    image: "https://images.unsplash.com/photo-1534158914592-062992fbe900",
  },
  {
    id: 2,
    name: "Event Space",
    type: "Event Center",
    description: "Perfect for celebrations and corporate events",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
  },
  {
    id: 3,
    name: "Luxury Venue",
    type: "Hotel",
    description: "Elegant spaces for memorable occasions",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
];

export const FeaturedVenues = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-display font-bold text-center mb-4 uppercase">
          Featured Venues
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
          Discover extraordinary spaces for your next event
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {venues.map((venue) => (
            <Card key={venue.id} className="bg-black border border-white/20 rounded-none overflow-hidden group">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              
              <CardHeader className="border-t border-white/20">
                <CardTitle className="text-2xl font-display uppercase">{venue.name}</CardTitle>
                <CardDescription className="text-gray-400">{venue.type}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-300">
                  {venue.description}
                </p>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full bg-accent hover:bg-accent/90 rounded-none text-lg uppercase">
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
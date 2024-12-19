import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedVenues } from "@/components/FeaturedVenues";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedVenues />
    </div>
  );
};

export default Index;
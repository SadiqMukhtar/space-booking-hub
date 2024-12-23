import { SearchBar } from "@/features/venues/components/SearchBar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[600px]">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=2070')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5)"
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Book Your Indoor Football Pitch
          </h1>
          <p className="text-xl text-white mb-8 drop-shadow-md">
            Find and book the perfect indoor football pitch near you
          </p>

          {/* Search Section */}
          <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
            <SearchBar />
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button 
              size="lg"
              onClick={() => navigate('/venues')}
              className="bg-accent hover:bg-accent/90 text-lg px-8"
            >
              Browse All Venues
            </Button>

            {/* Quick Options Card */}
            <Card className="w-full max-w-md mt-4 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  Quick Options <ChevronDown className="h-4 w-4" />
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Pitch Size</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5-a-side</SelectItem>
                      <SelectItem value="7">7-a-side</SelectItem>
                      <SelectItem value="11">11-a-side</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Duration</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="90">1.5 hours</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Instant Booking</h3>
              <p className="text-gray-200">Book your preferred pitch instantly with real-time availability</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Flexible Times</h3>
              <p className="text-gray-200">Choose from various time slots that suit your schedule</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Secure Payments</h3>
              <p className="text-gray-200">Pay securely with multiple payment options</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
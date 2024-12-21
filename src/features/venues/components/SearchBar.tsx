import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Users } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex flex-col md:flex-row items-center gap-4 border border-white/20">
        <div className="flex-1 w-full">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" />
            <Input
              type="text"
              placeholder="Search for football pitches..."
              className="pl-10 border-0 focus-visible:ring-0 bg-transparent text-white placeholder:text-white/70 w-full"
            />
          </div>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" className="flex-1 md:flex-none bg-white/10 border-white/20 text-white hover:bg-white/20">
            <Calendar className="h-4 w-4 mr-2" />
            Date
          </Button>
          <Button variant="outline" className="flex-1 md:flex-none bg-white/10 border-white/20 text-white hover:bg-white/20">
            <Users className="h-4 w-4 mr-2" />
            Team Size
          </Button>
          <Button size="lg" className="flex-1 md:flex-none bg-green-600 hover:bg-green-700">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
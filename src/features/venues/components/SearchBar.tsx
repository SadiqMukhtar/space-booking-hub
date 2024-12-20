import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="max-w-xl mx-auto mb-16">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 flex items-center border border-white/20">
        <Input
          type="text"
          placeholder="Search for venues by name or location..."
          className="border-0 focus-visible:ring-0 bg-transparent text-white placeholder:text-white/70"
        />
        <Button size="lg" className="ml-2 bg-accent hover:bg-accent/90">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};
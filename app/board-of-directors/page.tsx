import { Navigation } from "@/components/navigation";
import { directors } from "@/data/directors";
import { DirectorCard } from "@/components/director-card";
import { Footer } from "@/components/footer";

export default function BoardOfDirectorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="bg-greenCustom py-2"></div>

      {/* Hero Section */}
      <div className="w-full relative">
        <div className="absolute top-0 left-0 w-full h-[40%] bg-black z-10"></div>
        {/* White Background Section - full height */}
        <div className="absolute top-0 left-0 w-full h-full bg-white z-0"></div>

        {/* Content Container */}
        <div className="relative z-20 px-4 sm:px-12">
          {/* Header Section */}
          <div className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-5xl sm:text-6xl font-bold text-white text-center">
                Board of Directors
              </h1>
            </div>
          </div>

          {/* Directors Grid */}
          <div className="container mx-auto px-4">
            <div className="bg-gray-100 rounded-[3rem] p-12 shadow-lg z-30 mb-10">
              <div className="grid lg:grid-cols-3 gap-12 mb-16">
                {directors.slice(0, 3).map((director) => (
                  <DirectorCard key={director.id} director={director} />
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {directors.slice(3).map((director) => (
                  <DirectorCard key={director.id} director={director} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

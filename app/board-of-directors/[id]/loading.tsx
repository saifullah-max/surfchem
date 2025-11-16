import { Navigation } from "@/components/navigation";

export default function DirectorLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="h-10 w-64 bg-gray-700 animate-pulse rounded mx-auto mb-4"></div>
          <div className="h-6 w-40 bg-gray-700 animate-pulse rounded mx-auto"></div>
        </div>
      </section>

      {/* Director Detail Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-6 bg-gray-200 animate-pulse"></div>
              </div>

              <div className="md:w-2/3">
                <div className="h-10 w-64 bg-gray-200 animate-pulse rounded mb-4"></div>
                <div className="h-6 w-40 bg-gray-200 animate-pulse rounded mb-8"></div>

                <div className="space-y-4">
                  <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
                  <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
                  <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
                  <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded"></div>
                </div>

                <div className="mt-8">
                  <div className="h-6 w-32 bg-gray-200 animate-pulse rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded"></div>
                    <div className="h-4 w-2/3 bg-gray-200 animate-pulse rounded"></div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="h-10 w-48 bg-gray-200 animate-pulse rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="h-8 w-64 bg-blue-800 animate-pulse rounded mx-auto mb-4"></div>
          <div className="h-4 w-80 bg-blue-800 animate-pulse rounded mx-auto mb-8"></div>
          <div className="h-10 w-32 bg-green-700 animate-pulse rounded mx-auto"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-6 w-32 bg-blue-800 animate-pulse rounded"></div>
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-blue-800 animate-pulse rounded"></div>
                  <div className="h-4 w-32 bg-blue-800 animate-pulse rounded"></div>
                  <div className="h-4 w-20 bg-blue-800 animate-pulse rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

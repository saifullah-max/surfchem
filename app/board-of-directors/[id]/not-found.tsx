import Link from "next/link";
import { Navigation } from "@/components/navigation";

export default function DirectorNotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Director Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            We couldn't find the director you're looking for.
          </p>
          <Link
            href="/board-of-directors"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white hover:bg-blue-800 font-medium transition-colors rounded"
          >
            Return to Board of Directors
          </Link>
        </div>
      </section>
    </div>
  );
}

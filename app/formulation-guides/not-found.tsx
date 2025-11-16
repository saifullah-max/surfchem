import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Product Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The product you're looking for doesn't exist.
        </p>
        <Link href="/">
          <Button
            variant="outline"
            className="bg-white text-red-600 border-2 border-red-600 hover:bg-red-50"
          >
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

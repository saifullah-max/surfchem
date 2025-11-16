"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function ResearchPapersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-14">
          <h2 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] text-black2 font-bold mb-24">
            Research Papers
          </h2>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

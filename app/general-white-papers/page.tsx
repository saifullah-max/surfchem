"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { WhitePaperCard } from "@/components/white-paper-card";
import { whitePapers } from "@/data/generalWhitePaper";
import { Footer } from "@/components/footer";

export default function GeneralWhitePapersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [filters, setFilters] = useState<Record<string, string[]>>({});

  const itemsPerPage = 6;

  // Filter formulations based on selected filters
  const filteredWhitePapers = useMemo(() => {
    if (Object.keys(filters).length === 0) {
      return whitePapers;
    }

    return whitePapers.filter((whitePaper) => {
      return Object.entries(filters).every(([filterKey, filterValues]) => {
        if (filterValues.length === 0) return true;

        return true;
      });
    });
  }, [filters]);

  // Paginate formulations
  const paginatedWhitePapers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredWhitePapers.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredWhitePapers, currentPage]);

  const totalPages = Math.ceil(filteredWhitePapers.length / itemsPerPage);

  const handleFilterChange = (newFilters: Record<string, string[]>) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-16">
          <div className="max-w-6xl">
          <h2 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] text-black2 font-bold">
              White Papers
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-4">
        <div className="container px-4 sm:px-16">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
                {paginatedWhitePapers.map((whitePaper) => (
                  <div className="px-4" key={whitePaper.id}>
                    <WhitePaperCard whitePaper={whitePaper} />
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-8 h-8 rounded flex items-center justify-center text-sm font-medium transition-colors ${
                          currentPage === page
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

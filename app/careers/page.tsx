"use client";

import { Navigation } from "@/components/navigation";
import JobCard from "@/components/job-card";
import { jobPositions } from "@/data/careers";
import { Footer } from "@/components/footer";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="container px-4 pt-16 pb-6 sm:px-16">
          <h2 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] text-black2 font-bold">
            {" "}
            Careers
          </h2>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12 bg-gray-50 px-4 sm:px-16">
        <div className="space-y-12">
          {jobPositions.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <Footer />

      {/* Job Detail Modal
      <JobDetailModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      /> */}
    </div>
  );
}

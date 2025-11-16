"use client"
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import Resources from "@/components/resources";
import Link from "next/link";

const technologies = [
  {
    name: "Alkoxylated alcohol",
    slug: "alkoxylated-alcohol"
  },
  {
    name: "Alkoxylated alkylphenol",
    slug: "alkoxylated-alkylphenol"
  },
  {
    name: "Alkoxylated nonylphenol derivates",
    slug: "alkoxylated-nonylphenol-derivates"
  },
  {
    name: "Alkoxylated octylphenol",
    slug: "alkoxylated-octylphenol"
  },
  {
    name: "Alkoxylated tallow amine",
    slug: "alkoxylated-tallow-amine"
  },
  {
    name: "Alkoxylated tristrylphenol",
    slug: "alkoxylated-tristrylphenol"
  },
  {
    name: "Alkoxylated tristrylphenol derivates",
    slug: "alkoxylated-tristrylphenol-derivates"
  },
  {
    name: "Alkoxylated vegetable oils",
    slug: "alkoxylated-vegetable-oils"
  },
  {
    name: "Alkylbenzene sulphonate salts",
    slug: "alkylbenzene-sulphonate-salts"
  },
  {
    name: "Alpha olefin sulphonate",
    slug: "alpha-olefin-sulphonate"
  },
  {
    name: "Grafted polymeric surfactant",
    slug: "grafted-polymeric-surfactant"
  },
  {
    name: "Lauryl sulfates and derivatives",
    slug: "lauryl-sulfates-and-derivatives"
  },
  {
    name: "Oleic acid derivatives",
    slug: "oleic-acid-derivatives"
  },
  {
    name: "Polymeric surfactant",
    slug: "polymeric-surfactant"
  },
  {
    name: "Sorbitol derivates",
    slug: "sorbitol-derivates"
  },
  {
    name: "Sulfonated salts",
    slug: "sulfonated-salts"
  },
  {
    name: "Sulfosuccinates",
    slug: "sulfosuccinates"
  },
  {
    name: "Superspreader adjuvant",
    slug: "superspreader-adjuvant"
  },
  {
    name: "Supersticker adjuvant",
    slug: "supersticker-adjuvant"
  },
  {
    name: "Wetting adjuvant",
    slug: "wetting-adjuvant"
  },
];

export default function TechnologyPortfolio() {

  return (
    <>
      {" "}
      {/* Header */}
      <Navigation />
      <div className="min-h-screen">
        <div className="">
          <div className="bg-white py-16 md:py-16 px-4 lg:px-[60px] md:px-[30px]">
            <h1 className="text-[66px] font-bold text-black2 tracking-wide">
              TECHNOLOGY PORTFOLIO
            </h1>
          </div>

          <div className="bg-gray-100 py-16 md:py-16 px-4 lg:px-[60px] md:px-[30px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {technologies.map((tech, index) => (
                <Link 
                  href={`/technology-port/${tech.slug}`}
                  key={index}
                  className="block"
                >
                  <div
                    className="bg-white rounded-[22px] p-6 min-h-[167px] shadow-md 
                    transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
                    flex items-center justify-center cursor-pointer
                    hover:bg-greenCustom hover:text-white hover:shadow-xl"
                  >
                    <p className="font-bold text-[26px] text-center leading-relaxed">
                      {tech.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      
            {/* Resources */}
            <Resources />


      {/* Footer Section */}
      <Footer />
    </>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";

// Import all technology data files
import { alkoxylatedAlcoholData } from "@/data/technologies/alkoxylatedAlcohol";
import { alkoxylatedAlkylphenolData } from "@/data/technologies/alkoxylatedAlkylphenol";
import { alkoxylatedNonylphenolDerivatesData } from "@/data/technologies/alkoxylatedNonylphenolDerivates";
import { alkoxylatedOctylphenolData } from "@/data/technologies/alkoxylatedOctylphenol";
import { formulationTypes } from "@/data/technologies/alkoxylatedAlcohol"; // Using the same formulation types for all
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

// Map of technology slugs to their respective data
const technologyData: Record<string, any> = {
  "alkoxylated-alcohol": alkoxylatedAlcoholData,
  "alkoxylated-alkylphenol": alkoxylatedAlkylphenolData,
  "alkoxylated-nonylphenol-derivates": alkoxylatedNonylphenolDerivatesData,
  "alkoxylated-octylphenol": alkoxylatedOctylphenolData,
  // Add other technologies here as we create their data files
};

export default async function TechnologyDetails({
  params,
}: {
  params: { techName: string };
}) {
  const techData = await technologyData[params.techName];

  if (!techData) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <Navigation />
      <div className="min-h-screen">
        <div className="min-h-screen bg-white py-16 md:py-16 px-4 lg:px-[60px] md:px-[30px]">
          <div>
            <h1 className="text-[66px] font-bold text-black2 mb-16">
              {techData.title}
            </h1>
            <p className="text-[22px] text-black mb-4">
              {techData.description}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-2 border-[#CCCCCC]">
                <thead className="border-2 border-[#CCCCCC]">
                  <tr className="bg-tableColor border-2 border-[#CCCCCC]  text-black2 text-[18px]">
                    <th className="border-2 border-[#CCCCCC] px-2 py-2 text-left font-bold">
                      PRODUCT NAME
                    </th>
                    <th className="border-2 border-[#CCCCCC] px-2 py-2 text-left font-bold">
                      SURFACTANT SERIES
                    </th>
                    <th className="border-2 border-[#CCCCCC] px-2 py-2 text-left font-bold">
                      CHEMICAL CATEGORY
                    </th>
                    <th
                      className="border-2 border-[#CCCCCC]  px-2 py-2 text-center font-bold"
                      colSpan={formulationTypes.length}
                    >
                      APPLICABLE FORMULATION TYPES
                    </th>
                  </tr>
                  <tr className="bg-white text-[18px]">
                    <th className="border-2 border-[#CCCCCC]"></th>
                    <th className="border-2 border-[#CCCCCC]"></th>
                    <th className="border-2 border-[#CCCCCC]"></th>
                    {formulationTypes.map((type) => (
                      <th
                        key={type}
                        className="border-2 border-[#CCCCCC] px-2 py-2 text-center font-bold text-black2 min-w-[40px]"
                      >
                        {type}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="border-2 border-[#CCCCCC]">
                  {techData.products.map((product: any, index: number) => (
                    <tr
                      key={index}
                      className="odd:bg-[#F6F7F7] even:bg-white text-[16px]"
                    >
                      <td className="border-2 border-[#CCCCCC] px-2 py-2 text-greenCustom font-medium">
                        {product.name}
                      </td>
                      <td className="border-2 border-[#CCCCCC] px-2 py-2 text-greenCustom font-medium">
                        {product.series}
                      </td>
                      <td className="border-2 border-[#CCCCCC] px-2 py-2 text-black font-medium">
                        {product.category}
                      </td>
                      {formulationTypes.map((type) => (
                        <td
                          key={type}
                          className="border-2 border-[#CCCCCC] px-2 py-3 text-center text-sm"
                        >
                          {product.formulations.includes(type) ? (
                            <span className="text-black font-bold text-lg">x</span>
                          ) : (
                            ""
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </>
  );
}

import { formulationsData } from "@/data/formulations";

export function extractFilterSections() {
  const filters = {
    active: new Set<string>(),
    surfactant: new Set<string>(),
    // Add more if needed
  };

  formulationsData.forEach((formulation) => {
    formulation.activeIngredients?.forEach((ai) =>
      filters.active.add(ai.trim())
    );
    formulation.surfactants?.forEach((s) => filters.surfactant.add(s.trim()));
  });

  const filterSections = [
    {
      title: "Active Ingredients",
      items: Array.from(filters.active).sort(),
      key: "active",
    },
    {
      title: "Surfactants",
      items: Array.from(filters.surfactant).sort(),
      key: "surfactant",
    },
  ];

  return filterSections;
}

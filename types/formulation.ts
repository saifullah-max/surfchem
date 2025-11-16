export interface Formulation {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  activeIngredients?: string[];
  benefits?: string[];
  applications?: string[];
  technicalSpecs?: {
    concentration: string;
    formulation: string;
    packaging: string;
    shelfLife: string;
  };
  surfactants?: string[];
  category: string;
  tags: string[];
}

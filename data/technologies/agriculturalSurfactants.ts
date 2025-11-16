import { formulationTypes } from "./alkoxylatedAlcohol";

export const agriculturalSurfactantsData = {
  title: "Agricultural Surfactants",
  description: "High-performance surfactants for agricultural applications",
  products: [
    {
      name: "AGRICHEM 100",
      series: "Non-Ionic",
      category: "Alkyl Polyglycoside",
      formulations: {
        "EW": true,
        "SC": true,
        "SE": false,
        "CS": true,
        "OD": true,
        "WG": true,
        "WP": true,
        "GR": false,
        "EC": false,
        "SL": true,
        "FS": true,
      },
    },
    {
      name: "AGRICHEM 200",
      series: "Anionic",
      category: "Alkyl Ether Sulfate",
      formulations: {
        "EW": true,
        "SC": true,
        "SE": true,
        "CS": false,
        "OD": true,
        "WG": true,
        "WP": false,
        "GR": true,
        "EC": true,
        "SL": true,
        "FS": true,
      },
    },
    {
      name: "AGRICHEM 300",
      series: "Amphoteric",
      category: "Cocamidopropyl Betaine",
      formulations: {
        "EW": true,
        "SC": true,
        "SE": true,
        "CS": true,
        "OD": true,
        "WG": true,
        "WP": true,
        "GR": true,
        "EC": true,
        "SL": true,
        "FS": true,
      },
    },
  ],
};

export default agriculturalSurfactantsData;

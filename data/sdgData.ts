// src/data/sdgData.ts

export interface Project {
  id: number;
  project: string;
}

export interface SDGGoal {
  goalNumber: number;
  goalTitle: string;
  projects: Project[];
}

export const sdgGoals: SDGGoal[] = [
  {
    goalNumber: 1,
    goalTitle: "No Poverty",
    projects: [
      { id: 1, project: "Loan of USD 5,000 for to 10 small businesses" },
      {
        id: 2,
        project: "Awareness program on encouraging to work rather than begging",
      },
      {
        id: 3,
        project:
          "Providing 10,000 sewing machines for women in less developed cities of each Country",
      },
      { id: 4, project: "Awareness programs on control of birth rate" },
      { id: 5, project: "Education funding for special children" },
      { id: 6, project: "Providing jobs to special people" },
      {
        id: 7,
        project: "Opening of institute for (free education) skilled training",
      },
    ],
  },
  {
    goalNumber: 2,
    goalTitle: "Zero Hunger",
    projects: [
      {
        id: 1,
        project: "Distribution of free meals on a designated frequence",
      },
      { id: 2, project: "Micro Finance facility" },
      {
        id: 3,
        project: "Modern Techniques Training over Traditional Techniques",
      },
      { id: 4, project: "Distribution of Meals in Horizon Tower" },
      {
        id: 5,
        project:
          "Creating employment opportunities to homeless and needy people",
      },
      {
        id: 6,
        project:
          "Distribution of Funds to widow and disable persons for small business/shops",
      },
    ],
  },
  {
    goalNumber: 3,
    goalTitle: "Good health & well being",
    projects: [
      {
        id: 1,
        project: "Sponsor medicine for cancer patient and needy people",
      },
      {
        id: 2,
        project:
          "Awareness program on cancerous items i.e Betel, Tobacco, etc.",
      },
      {
        id: 3,
        project:
          "Awareness program on viral diseases / Providing free anti bacterial spray",
      },
      {
        id: 4,
        project:
          "Installing and maintaining free water filtration plants in remote areas",
      },
      { id: 5, project: "Basic Cleanliness sessions" },
      { id: 6, project: "Free vaccination drives" },
      { id: 7, project: "Awareness sessions and drives for blood donation" },
      { id: 8, project: "Sponsoring thalassemia screening" },
    ],
  },
  {
    goalNumber: 4,
    goalTitle: "Quality education",
    projects: [
      { id: 1, project: "Developing digital libraries" },
      { id: 2, project: "Introducing short courses free of cost" },
      {
        id: 3,
        project:
          "Providing technical trainings to communities which can hone their skills",
      },
      { id: 4, project: "Scholarship programs for non-management employees" },
      { id: 5, project: "Scholarship programs for management employees" },
      { id: 6, project: "Free elementary school books donatation programs" },
    ],
  },
  {
    goalNumber: 5,
    goalTitle: "Gender equality",
    projects: [
      { id: 1, project: "Supporting NGOs and welfare institutes" },
      { id: 2, project: "Encouraging education for females" },
      { id: 3, project: "Programs for women empowerment" },
      { id: 4, project: "Microfinance for women" },
      { id: 5, project: "Strengthening policies based on Gender Equality" },
    ],
  },
  {
    goalNumber: 6,
    goalTitle: "Clean water and sanitation",
    projects: [
      { id: 1, project: "Water Cooler Installation" },
      { id: 2, project: "Digging of wells in rural areas" },
      { id: 3, project: "Construction of public toilets in slum areas" },
      { id: 4, project: "Condensation plant at dry and rural areas" },
      { id: 5, project: "Use of green energy to produce clean water" },
    ],
  },
  {
    goalNumber: 7,
    goalTitle: "Affordable and clean energy",
    projects: [
      { id: 1, project: "Installing small power gen units" },
      {
        id: 2,
        project:
          "Transitioning to the vision of Green & Solar Surfactant Chemicals Company",
      },
      { id: 3, project: "Developing small wind parks near villages" },
    ],
  },
  {
    goalNumber: 8,
    goalTitle: "Decent Work and Economic Growth",
    projects: [
      {
        id: 1,
        project: "Inculcating basic work ethics in communities in general",
      },
      { id: 2, project: "Affiliation with different institute/ Job fairs" },
      { id: 3, project: "Awareness on child labor" },
      {
        id: 4,
        project:
          "Providing agriculture tools/machinery at installments to the needy",
      },
    ],
  },
  {
    goalNumber: 9,
    goalTitle: "Industry, Innovation and Infrastructure",
    projects: [
      { id: 1, project: "Process Re-Engineering System" },
      { id: 2, project: "Powder Plant Automation" },
      { id: 3, project: "Expedite research on green chemistry" },
      { id: 4, project: "Focus to develop local logistics vendors" },
    ],
  },
  {
    goalNumber: 10,
    goalTitle: "Reduced inequalities",
    projects: [
      { id: 1, project: "Quota for special people" },
      { id: 2, project: "Say NO to child labor vendor" },
      { id: 3, project: "Health Facility for Children" },
      { id: 4, project: "Higher wages for the lowest-paid workers" },
      { id: 5, project: "Setup health medical camps" },
    ],
  },
  {
    goalNumber: 11,
    goalTitle: "Sustainable Cities and Communities",
    projects: [
      { id: 1, project: "Focus on solar systems" },
      { id: 2, project: "Transportation ( Solar )" },
      { id: 3, project: "Waste management system" },
      { id: 4, project: "Plantation drives" },
      { id: 5, project: "Develop recreational centers" },
      {
        id: 6,
        project:
          "Installation of solar street lights in less developed and remote cities",
      },
      {
        id: 7,
        project:
          "Installation of water filteration plants in less developed and remote cities",
      },
    ],
  },
  {
    goalNumber: 12,
    goalTitle: "Responsible Consumption and Production",
    projects: [
      { id: 1, project: "Using green material sources" },
      { id: 2, project: "Focus on bio-gas and less dependance on natural gas" },
      { id: 3, project: "Production of Marsh gas" },
      { id: 4, project: "Reduction in annual consumption of Electricity" },
    ],
  },
  {
    goalNumber: 13,
    goalTitle: "Climate Action",
    projects: [{ id: 1, project: "Tree plantation drive" }],
  },
  {
    goalNumber: 14,
    goalTitle: "Life Below Water",
    projects: [
      {
        id: 1,
        project:
          "Installations of ETP mandatory at all locations (effluent treatment plants)",
      },
      {
        id: 2,
        project:
          "Aquaculture: Eliminate the use of non-biodegradable and aquatically toxic chemicals and replace with green chemistry",
      },
      { id: 3, project: "Increase the use of materials that can be recycled" },
      { id: 4, project: "Clean beach drives" },
      { id: 5, project: "Mangroves plantation drive for aquatic life" },
    ],
  },
  {
    goalNumber: 15,
    goalTitle: "Life on Land",
    projects: [
      { id: 1, project: "Develop projects to increase forestation" },
      { id: 2, project: "Focus on organic food" },
      { id: 3, project: "Focus on bio fuel projects" },
    ],
  },
  {
    goalNumber: 16,
    goalTitle: "Peace, Justice and Strong Institutions",
    projects: [
      { id: 1, project: "Awareness to SCC staff for discouraging child labor" },
    ],
  },
  {
    goalNumber: 17,
    goalTitle: "Partnerships for the Goals",
    projects: [
      { id: 1, project: "Collaboration with WHO/UNICEF" },
      { id: 2, project: "UNICEF/USAID" },
      { id: 3, project: "Funds in GNI" },
      { id: 4, project: "Mobilization of Funds" },
      { id: 5, project: "International support in SDP 2030" },
      { id: 6, project: "Capacity building STI" },
      { id: 7, project: "Promote universal rule-based non-discriminatory" },
      { id: 8, project: "Enhance global partnership for SDP" },
      {
        id: 9,
        project:
          "North-south, south-south, triangular regional and international cooperation",
      },
      { id: 10, project: "Environmentally sound technologies" },
    ],
  },
];

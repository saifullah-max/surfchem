// import type { JobPosition } from "@/types/career";

// export const careersData: JobPosition[] = [
//   {
//     id: "1",
//     title: "Regional Business Manager, South Asia (exc. Pakistan)",
//     location: "South Asia - Home based in India",
//     department: "Sales & Business Development",
//     type: "Full-time",
//     slug: "regional-business-manager-south-asia",
//     summary:
//       "We are seeking an experienced and results-driven Regional Business Manager to join our team. The successful candidate will be responsible for leading sales, client acquisition, market expansion, sales strategy, & business development efforts, providing technical support, and driving business growth in the agrochemical sector. If you have a strong background in agro sales and technical support, and a passion for delivering exceptional results, we encourage you to apply.",
//     responsibilities: [
//       "Lead sales efforts to achieve revenue targets and expand market share",
//       "To identify new markets and business opportunities in the chemical and agrochemical space",
//       "Develop and maintain strong relationships with customers, distributors, and partners",
//       "Provide technical support and product training to customers and sales teams",
//       "Conduct market research and competitor analysis to inform sales strategies",
//       "Collaborate with cross-functional teams to drive business growth and innovation",
//       "Develop and implement sales plans, forecasts, and performance metrics with KPIs",
//     ],
//     requirements: [
//       "10+ years of experience in agrochemical industry as Techno commercial, direct sales, technical support, or related fields specially surfactant chemistry and application knowledge.",
//       "Relevant degree in Chemicals, Agriculture, or related",
//       "MBA in Sales and marketing from a reputable institution.",
//       "Proven track record of sales success and leadership",
//       "Strong technical knowledge of agrochemical products and",
//       "Excellent communication, interpersonal, and presentation skills with business",
//     ],
//     whatWeOffer: [
//       "Competitive cost of living and sales growth-based incentive structure. Opportunities for professional growth and development and a dynamic work environment.",
//     ],
//     howToApply:
//       "If you are a motivated and experienced sales professional looking for a new challenge, please submit your updated resume and cover letter at hr@surfchem.co.uk.",
//     equalOpportunity:
//       "Surfactant Chemical Company is an equal opportunity employer and welcomes applications from diverse candidates.",
//     postedDate: "2024-01-15",
//     featured: true,
//   },
//   {
//     id: "2",
//     title: "Regional Business Manager, China",
//     location: "Kunshan, China",
//     department: "Sales & Business Development",
//     type: "Full-time",
//     slug: "regional-business-manager-china",
//     summary:
//       "We are looking for a dynamic Regional Business Manager to lead our operations in China. The successful candidate will drive business growth, manage key client relationships, and expand our market presence in the Chinese agrochemical sector.",
//     responsibilities: [
//       "Develop and execute business strategies for the Chinese market",
//       "Build and maintain relationships with key customers and distributors",
//       "Identify new business opportunities and market segments",
//       "Provide technical support and training to local teams",
//       "Monitor market trends and competitive landscape",
//       "Collaborate with global teams to ensure consistent service delivery",
//       "Achieve sales targets and KPIs for the region",
//     ],
//     requirements: [
//       "8+ years of experience in chemical or agrochemical industry",
//       "Bachelor's degree in Chemistry, Chemical Engineering, or related field",
//       "Fluency in Mandarin and English",
//       "Strong understanding of Chinese business culture and regulations",
//       "Proven sales and business development track record",
//       "Technical knowledge of surfactants and agrochemical applications",
//       "Excellent communication and negotiation skills",
//     ],
//     whatWeOffer: [
//       "Competitive salary with performance-based incentives",
//       "Comprehensive benefits package",
//       "Professional development opportunities",
//       "International exposure and career growth",
//     ],
//     howToApply:
//       "Please submit your resume and cover letter in both English and Chinese to hr@surfchem.co.uk.",
//     equalOpportunity:
//       "We are committed to diversity and inclusion in our workplace and welcome applications from all qualified candidates.",
//     postedDate: "2024-01-10",
//     featured: true,
//   },
//   {
//     id: "3",
//     title: "Regional Business Manager, Middle-East",
//     location: "Multan/Lahore - based in Pakistan",
//     department: "Sales & Business Development",
//     type: "Full-time",
//     slug: "regional-business-manager-middle-east",
//     summary:
//       "Join our team as a Regional Business Manager for the Middle East region. This role requires a strategic thinker with deep understanding of the regional market dynamics and strong technical expertise in agrochemical solutions.",
//     responsibilities: [
//       "Lead business development initiatives across Middle East markets",
//       "Establish and maintain strategic partnerships with distributors",
//       "Provide technical consultation to customers and partners",
//       "Develop market entry strategies for new products",
//       "Monitor regulatory requirements and ensure compliance",
//       "Represent the company at industry events and conferences",
//       "Prepare market analysis and business reports",
//     ],
//     requirements: [
//       "7+ years of experience in agrochemical or chemical industry",
//       "Degree in Agricultural Sciences, Chemistry, or related field",
//       "Knowledge of Arabic and English languages preferred",
//       "Understanding of Middle East agricultural practices",
//       "Strong analytical and strategic thinking skills",
//       "Experience with regulatory affairs in the region",
//       "Willingness to travel extensively within the region",
//     ],
//     whatWeOffer: [
//       "Attractive compensation package with regional allowances",
//       "Health and life insurance coverage",
//       "Annual performance bonuses",
//       "Training and development programs",
//       "Flexible working arrangements",
//     ],
//     howToApply:
//       "Interested candidates should send their CV and a detailed cover letter to hr@surfchem.co.uk with the subject line 'Regional Business Manager - Middle East'.",
//     equalOpportunity:
//       "Surfactant Chemical Company values diversity and is an equal opportunity employer.",
//     postedDate: "2024-01-05",
//     featured: false,
//   },
// ];


export interface JobPosition {
  id: string;
  title: string;
  location: string;
  jobSummary: string;
  responsibilities: string[];
  requirements: string[];
  whatWeOffer: string;
  howToApply: string;
  equalOpportunity: string;
}

export const jobPositions: JobPosition[] = [
  {
    id: "1",
    title: "Regional Business Manager, South Asia (exc. Pakistan)",
    location: "South Asia - Home based in India",
    jobSummary:
      "We are seeking an experienced and results-driven Regional Business Manager to join our team. The successful candidate will be responsible for leading sales, client acquisition, market expansion, sales strategy, & business development efforts, providing technical support, and driving business growth in the agrochemical sector. If you have a strong background in agro sales and technical support, and a passion for delivering exceptional results, we encourage you to apply.",
    responsibilities: [
      "Lead sales efforts to achieve revenue targets and expand market share",
      "To identify new markets and business opportunities in the chemical and agrochemical space.",
      "Develop and maintain strong relationships with customers, distributors, and partners",
      "Provide technical support and product training to customers and sales teams",
      "Conduct market research and competitor analysis to inform sales strategies",
      "Collaborate with cross-functional teams to drive business growth and innovation",
      "Develop and implement sales plans, forecasts, and performance metrics with KPIs",
    ],
    requirements: [
      "15+ years of experience in agrochemical industry as Techno commercial, direct sales, technical support, or related fields specially surfactant chemistry and application knowledge.",
      "Relevant degree in Chemicals, Agriculture, or related",
      "MBA in Sales and marketing from a reputable institution.",
      "Proven track record of sales success and leadership",
      "Strong technical knowledge of agrochemical products and",
      "Excellent communication, interpersonal, and presentation skills with business",
    ],
    whatWeOffer:
      "Competitive cost of living and sales growth-based incentive structure. Opportunities for professional growth and development and a dynamic work environment.",
    howToApply:
      "If you are a motivated and experienced sales professional looking for a new challenge, please submit your updated resume and cover letter at hr@surfchem.co.uk.",
    equalOpportunity:
      "Surfactant Chemical Company is an equal opportunity employer and welcomes applications from diverse candidates.",
  },
  {
    id: "2",
    title: "Regional Business Manager, China",
    location: "Kunshan, China",
    jobSummary:
      "We are seeking an experienced and results-driven Regional Business Manager to join our team in China. The successful candidate will be responsible for leading sales, client acquisition, market expansion, sales strategy, & business development efforts, providing technical support, and driving business growth in the agrochemical sector.",
    responsibilities: [
      "Lead sales efforts to achieve revenue targets and expand market share",
      "To identify new markets and business opportunities in the chemical and agrochemical space.",
      "Develop and maintain strong relationships with customers, distributors, and partners",
      "Provide technical support and product training to customers and sales teams",
      "Conduct market research and competitor analysis to inform sales strategies",
      "Collaborate with cross-functional teams to drive business growth and innovation",
      "Develop and implement sales plans, forecasts, and performance metrics with KPIs",
    ],
    requirements: [
      "15+ years of experience in agrochemical industry as Techno commercial, direct sales, technical support, or related fields specially surfactant chemistry and application knowledge.",
      "Relevant degree in Chemicals, Agriculture, or related",
      "MBA in Sales and marketing from a reputable institution.",
      "Proven track record of sales success and leadership",
      "Strong technical knowledge of agrochemical products and",
      "Excellent communication, interpersonal, and presentation skills with business",
    ],
    whatWeOffer:
      "Competitive cost of living and sales growth-based incentive structure. Opportunities for professional growth and development and a dynamic work environment.",
    howToApply:
      "If you are a motivated and experienced sales professional looking for a new challenge, please submit your updated resume and cover letter at hr@surfchem.co.uk.",
    equalOpportunity:
      "Surfactant Chemical Company is an equal opportunity employer and welcomes applications from diverse candidates.",
  },
  {
    id: "3",
    title: "Regional Business Manager, Middle-East",
    location: "Multan/Lahore - based in Pakistan",
    jobSummary:
      "We are seeking an experienced and results-driven Regional Business Manager to join our team in Middle-East. The successful candidate will be responsible for leading sales, client acquisition, market expansion, sales strategy, & business development efforts, providing technical support, and driving business growth in the agrochemical sector.",
    responsibilities: [
      "Lead sales efforts to achieve revenue targets and expand market share",
      "To identify new markets and business opportunities in the chemical and agrochemical space.",
      "Develop and maintain strong relationships with customers, distributors, and partners",
      "Provide technical support and product training to customers and sales teams",
      "Conduct market research and competitor analysis to inform sales strategies",
      "Collaborate with cross-functional teams to drive business growth and innovation",
      "Develop and implement sales plans, forecasts, and performance metrics with KPIs",
    ],
    requirements: [
      "15+ years of experience in agrochemical industry as Techno commercial, direct sales, technical support, or related fields specially surfactant chemistry and application knowledge.",
      "Relevant degree in Chemicals, Agriculture, or related",
      "MBA in Sales and marketing from a reputable institution.",
      "Proven track record of sales success and leadership",
      "Strong technical knowledge of agrochemical products and",
      "Excellent communication, interpersonal, and presentation skills with business",
    ],
    whatWeOffer:
      "Competitive cost of living and sales growth-based incentive structure. Opportunities for professional growth and development and a dynamic work environment.",
    howToApply:
      "If you are a motivated and experienced sales professional looking for a new challenge, please submit your updated resume and cover letter at hr@surfchem.co.uk.",
    equalOpportunity:
      "Surfactant Chemical Company is an equal opportunity employer and welcomes applications from diverse candidates.",
  },
];

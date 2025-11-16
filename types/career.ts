export interface JobPosition {
  id: string;
  title: string;
  location: string;
  department: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  slug: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  whatWeOffer: string[];
  howToApply: string;
  equalOpportunity: string;
  postedDate: string;
  featured?: boolean;
}

export interface JobApplication {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  collegeAttended: string;
  educationLevel: string;
  majorMinor: string;
  workExperience: string;
  eligibleToWork: string;
  cv: File | null;
  whyApplying: string;
  security: string;
}

import { notFound } from "next/navigation";
import { RegionalContactPage } from "@/components/regional-contact-page";
import { regionalContactsData } from "@/data/regional-contacts";

interface RegionalContactPageProps {
  params: {
    country: string;
  };
}

export default function DynamicRegionalContactsPage({
  params,
}: RegionalContactPageProps) {
  const data = regionalContactsData[params.country];

  if (!data) {
    notFound();
  }

  return <RegionalContactPage data={data} />;
}

// Generate static params for all countries
export function generateStaticParams() {
  return Object.keys(regionalContactsData).map((country) => ({
    country,
  }));
}

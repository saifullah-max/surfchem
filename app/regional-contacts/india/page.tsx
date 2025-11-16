import { notFound } from "next/navigation";
import { RegionalContactPage } from "@/components/regional-contact-page";
import { regionalContactsData } from "@/data/regional-contacts";

export default function IndiaRegionalContactsPage() {
  const data = regionalContactsData.india;

  if (!data) {
    notFound();
  }

  return <RegionalContactPage data={data} />;
}

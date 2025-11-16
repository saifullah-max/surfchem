import { notFound } from "next/navigation";
import { RegionalContactPage } from "@/components/regional-contact-page";
import { regionalContactsData } from "@/data/regional-contacts";

export default function UAERegionalContactsPage() {
  const data = regionalContactsData.uae;

  if (!data) {
    notFound();
  }

  return <RegionalContactPage data={data} />;
}

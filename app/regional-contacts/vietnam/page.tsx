import { notFound } from "next/navigation";
import { RegionalContactPage } from "@/components/regional-contact-page";
import { regionalContactsData } from "@/data/regional-contacts";

export default function VietnamRegionalContactsPage() {
  const data = regionalContactsData.vietnam;

  if (!data) {
    notFound();
  }

  return <RegionalContactPage data={data} />;
}

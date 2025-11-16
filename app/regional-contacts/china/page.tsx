import { notFound } from "next/navigation";
import { RegionalContactPage } from "@/components/regional-contact-page";
import { regionalContactsData } from "@/data/regional-contacts";

export default function ChinaRegionalContactsPage() {
  const data = regionalContactsData.china;

  if (!data) {
    notFound();
  }

  return <RegionalContactPage data={data} />;
}

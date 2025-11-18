export const dynamic = 'force-dynamic';

import { RegionalContactPage } from "@/components/regional-contact-page";
import { regionalContactsData } from "@/data/regional-contacts";
import { notFound } from "next/navigation";

export default function page() {
  const data = regionalContactsData.contactUsGen;

  if (!data) {
    notFound();
  }
  return <RegionalContactPage data={data} />;
}

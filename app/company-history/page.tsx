export const dynamic = 'force-dynamic';

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { getCompanyHistory } from "@/lib/backend";
import Head from "next/head";

export default async function CompanyHistoryPage() {
  const data = await getCompanyHistory()
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://www.surfchem.co.uk/assets/css/style.css" />
      </Head>
      <Navigation />
      <div dangerouslySetInnerHTML={{ __html: data?.description || '' }} />;
      <Footer />
    </>
  );
}

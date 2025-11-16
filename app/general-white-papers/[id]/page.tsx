import { notFound } from "next/navigation";
import { whitePapers } from "@/data/generalWhitePaper";
import { SignInForm } from "@/components/sign-in-form";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

interface WhitePaperDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WhitePaperDetailPage({
  params,
}: WhitePaperDetailPageProps) {
  const { id } = await params;
  const whitePaper = whitePapers.find((paper) => paper.id === id);

  if (!whitePaper) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl px-4 sm:px-14 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Content */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-black2 leading-tight uppercase">
                {whitePaper.title}:
              </h1>
              <p className="text-black2 leading-relaxed text-lg">
                {whitePaper.description}
              </p>
            </div>

            {/* Right side - Sign In Form */}
            <div className="flex justify-center md:justify-end">
              <SignInForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

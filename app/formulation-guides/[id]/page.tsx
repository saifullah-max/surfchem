import { SignInForm } from "@/components/sign-in-form";
import { formulations } from "@/data/formulations";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function FormulationGuideDetail({ params }: ProductPageProps) {
  const { id } = await params;
  //   const product = products.find((p) => p.id === id);
  const product = formulations.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-white">
        <div className="container px-4 sm:px-14 py-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-black2 leading-tight mt-10">
            {product.title}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-10">
            {/* Product Details */}
            <div className="space-y-6">
              <div className="prose prose-gray max-w-none">
                <p className="text-black text-lg sm:text-xl leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>
            </div>

            {/* Sign In Form */}
            <div className="flex justify-center lg:justify-end">
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function ThankYouCareer() {
    return (
        <>
            <Navigation />

            <section className="w-full px-6 md:px-12 lg:px-20 py-20">
                {/* Main Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-10">
                    Thank You
                </h1>

                {/* Red Heading */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-red mb-4">
                    THANK YOU FOR APPLYING!
                </h2>

                {/* Description */}
                <p className="text-xl md:text-2xl text-black leading-relaxed">
                    Surfactant Chemicals Company will review your application promptly.
                </p>
            </section>

            <Footer />
        </>
    );
}

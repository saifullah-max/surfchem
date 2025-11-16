"use client";
import { Footer } from "@/components/footer";
import { LoginCard } from "@/components/login-card";
import { Navigation } from "@/components/navigation";
import { RegisterCard } from "@/components/register-card";

export default function AuthForm() {
  return (
    <>
      <div className="min-h-screen bg-[#f8f9fa]">
        <Navigation />

        <main className="py-16 container px-4 sm:px-32 max-w-8xl mx-auto">
          {/* Section headings */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-32">
            <div>
              <h1 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] text-black2 font-bold mb-6 ml-8">
                Login
              </h1>
            </div>
            <div>
              <h1 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] text-black2 font-bold mb-6 ml-8">
                Register
              </h1>
            </div>
          </div>

          {/* Background band behind the cards */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[220px] -z-10 h-24 rounded-md bg-secondary md:top-[240px]"
          />

          {/* Cards */}
          <section className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-32">
            <LoginCard />
            <RegisterCard />
          </section>
        </main>
        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}

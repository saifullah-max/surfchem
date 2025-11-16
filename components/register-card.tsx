"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";

export function RegisterCard() {
  return (
    <Card className="rounded-2xl bg-card p-8 shadow-xl md:p-10">
      <div className="space-y-6">
        <div className="space-y-1">
          <h3 className="text-pretty text-[27px] md:text-[32px] leading-[38px] font-bold tracking-tight">
            Need a sample?
          </h3>
          <p className="text-pretty text-[27px] md:text-[32px] leading-[38px] font-normal text-foreground/90">
            Access exclusive content?
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-2 grid grid-cols-1 gap-8"
        >
          <div>
            <Label htmlFor="first" className="sr-only">
              First Name
            </Label>
            <Input
              id="first"
              placeholder="First Name*"
              className="h-11 rounded-xl border border-black2"
            />
          </div>

          <div>
            <Label htmlFor="last" className="sr-only">
              Last Name
            </Label>
            <Input
              id="last"
              placeholder="Last Name*"
              className="h-11 rounded-xl border border-black2"
            />
          </div>

          <div>
            <Label htmlFor="country" className="sr-only">
              Country
            </Label>
            <Input
              id="country"
              placeholder="United States"
              className="h-11 rounded-xl border border-black2"
            />
          </div>

          <div>
            <Label htmlFor="reg-email" className="sr-only">
              Email
            </Label>
            <Input
              id="reg-email"
              type="email"
              placeholder="Email*"
              className="h-11 rounded-xl border border-black2"
            />
          </div>

          <div>
            <Label htmlFor="company" className="sr-only">
              Company Name
            </Label>
            <Input
              id="company"
              placeholder="Company Name*"
              className="h-11 rounded-xl border border-black2"
            />
          </div>

          <div>
            <Label htmlFor="webpage" className="sr-only">
              Webpage
            </Label>
            <Input
              id="webpage"
              placeholder="Webpage*"
              className="h-11 rounded-xl border border-black2"
            />
          </div>

          <div>
            <Label htmlFor="mobile" className="sr-only">
              Mobile number
            </Label>
            <Input
              id="mobile"
              placeholder="Mobile number*"
              className="h-11 rounded-xl border border-black2"
            />
          </div>

          <div>
            <Label htmlFor="security" className="sr-only">
              Security
            </Label>
            <Input
              id="security"
              placeholder="For security, type SURFCHEM in the following field:"
              className="h-11 rounded-xl border border-black2"
            />
          </div>

          {/* CTA with red vertical bars */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <div>
              <Button className="text-[25px] md:text-[27px] font-bold bg-transparent hover:bg-transparent border-y-0 border-x-4 text-black border-red hover:text-red h-12 rounded-none">
                Register
              </Button>
            </div>
            
          </div>
        </form>
      </div>
    </Card>
  );
}

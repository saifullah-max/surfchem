"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode, useState } from "react";

export function ContactModal({
  triggerText = "Let's Talk",
  triggerClassName = "",
  children,
}: {
  triggerText?: string;
  triggerClassName?: string;
  children?: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className={`bg-greenCustom hover:bg-white text-white hover:text-greenCustom border-4 border-greenCustom ${triggerClassName} rounded-xl font-bold`}
        >
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="h-screen w-full md:max-w-4xl p-0 bg-white rounded-none overflow-hidden">
        <DialogHeader>
          <DialogTitle className="hidden" />
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
          {/* Left Side Text */}
          <div className="bg-white p-10 flex flex-col text-left">
            <h2 className="text-greenCustom font-bold text-[18px] md:text-[22px] mb-4">
              HAVE A QUESTIONS?
            </h2>
            <p className="text-[16px] md:text-[18px] font-semibold text-black mb-2">
              Let us know how we can help you!
            </p>
            <p className="text-[16px] md:text-[18px] text-black font-semibold">
              We look forward to speaking with you!
            </p>
          </div>

          {/* Right Side Form */}
          <div className="bg-white p-10 overflow-y-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
              />
              <textarea
                rows={4}
                placeholder="How can Surfactant Chemicals Company help you today?"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
              />
              <input
                type="text"
                placeholder="For security, type SURFCHEM"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
              />
              <div className="flex justify-center ">
                <Button
                  type="submit"
                  className="bg-greenCustom hover:bg-greenCustomHover text-white font-bold py-3 rounded-xl uppercase"
                >
                  Submit Inquiry
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

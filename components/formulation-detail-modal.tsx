"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Formulation } from "@/types/formulation";
import type { GeneralWhitePaper } from "@/types/generalWhitePapers";
import { X } from "lucide-react";

type Content = Formulation | GeneralWhitePaper;

interface FormulationDetailModalProps {
  content: Content;
  isOpen: boolean;
  onClose: () => void;
}

export function FormulationDetailModal({
  content,
  isOpen,
  onClose,
}: FormulationDetailModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sign in
    setIsSignedIn(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative">
          <div className="p-8">
            <DialogHeader className="mb-8">
              <DialogTitle className="text-3xl font-bold text-gray-900 leading-tight">
                {content.title}
              </DialogTitle>
            </DialogHeader>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Product Details */}
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    {content.description}
                  </p>
                </div>

                
              </div>

              {/* Right Column - Sign In Form */}
              <div className="lg:pl-8">
                {!isSignedIn ? (
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                      Sign In
                    </h2>
                    <p className="text-center text-gray-600 mb-8">
                      Sign in to view this content
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Input
                          type="text"
                          placeholder="Username*"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                          className="w-full"
                        />
                      </div>

                      <div>
                        <Input
                          type="password"
                          placeholder="Password*"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="w-full"
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remember"
                          checked={rememberMe}
                          onCheckedChange={(checked) =>
                            setRememberMe(checked as boolean)
                          }
                        />
                        <label
                          htmlFor="remember"
                          className="text-sm text-gray-600"
                        >
                          Remember Me?
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
                      >
                        Submit
                      </Button>

                      <div className="text-center space-y-2">
                        <p className="text-sm text-blue-600 hover:underline cursor-pointer">
                          Forgot Password
                        </p>
                        <p className="text-sm text-gray-600">
                          Don&apos;t have an account?{" "}
                          <span className="text-blue-600 hover:underline cursor-pointer">
                            Register Here
                          </span>
                        </p>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="bg-green-50 p-8 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      Welcome!
                    </h3>
                    <p className="text-green-700 mb-6">
                      You are now signed in and can view the complete technical
                      details for this formulation.
                    </p>
                    <Button
                      onClick={() => setIsSignedIn(false)}
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-100"
                    >
                      Sign Out
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

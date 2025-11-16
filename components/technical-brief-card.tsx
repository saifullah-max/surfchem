"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText } from "lucide-react";
import type { TechnicalBrief } from "@/types/technical-brief";

interface TechnicalBriefCardProps {
  brief: TechnicalBrief;
}

export function TechnicalBriefCard({ brief }: TechnicalBriefCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6 lg:p-8">
        <h3 className="text-[28px] font-bold text-black2 mb-4 leading-[32px]">
          {brief.title}{" "}
        </h3>
        <p className="text-[clamp(17px,2vw,22px)] text-black leading-[30px] mb-6">
          {brief.description}
        </p>
        <div className="flex justify-center items-center h-full">
          <Button
            onClick={() => {
              // In a real app, this would handle authentication and download
              alert("Please sign in to download this technical brief");
            }}
            className="bg-transparent hover:bg-transparent border-y-0 border-x-4 text-black border-red hover:text-red h-12 rounded-none font-bold text-2xl"
          >
            Sign In To Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

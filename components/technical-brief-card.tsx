"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { auth } from "@/lib/firebase";
import type { TechnicalBrief } from "@/types/technical-brief";
import { useEffect, useState } from "react";
import DownloadButton from "./download-button";

interface TechnicalBriefCardProps {
  brief: TechnicalBrief;
}

export function TechnicalBriefCard({ brief }: TechnicalBriefCardProps) {

  const [isAuth, setAuth] = useState<boolean>(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => setAuth(u != null))
    return () => unsubscribe();
  }, []);

  return (
    <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6 lg:p-8">
        <h3 className="text-[28px] font-bold text-black2 mb-4 leading-[32px]">
          {brief.title}{" "}
        </h3>
        <p className="text-[clamp(17px,2vw,22px)] text-black leading-[30px] mb-6">
          {brief.description}
        </p>
        {brief.downloadUrl && <div className="flex flex-col w-full max-w-full items-center">
          {!isAuth && <Button
            onClick={() => alert("Please sign in to download this technical brief")}
            className="bg-transparent hover:bg-transparent border-y-0 border-x-4 text-black border-red hover:text-red h-12 rounded-none font-bold text-2xl"
          >Sign In To Download</Button>}
          <DownloadButton href={brief.downloadUrl} />
        </div>}
      </CardContent>
    </Card>
  );
}

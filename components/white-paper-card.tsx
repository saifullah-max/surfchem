import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { WhitePaper } from "@/data/generalWhitePaper";
import Image from "next/image";
import Link from "next/link";

interface WhitePaperCardProps {
  whitePaper: WhitePaper
}

export function WhitePaperCard({ whitePaper }: WhitePaperCardProps) {


  return (
    <>
      <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="h-60 relative overflow-hidden">
          <Image
            src={whitePaper.image || "/placeholder.svg"}
            alt={whitePaper.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-4 lg:p-6">
          <h3 className="text-[28px] font-bold text-black2 mb-4 leading-[32px]">
            {whitePaper.title}
          </h3>
          <p className="text-[clamp(17px,2vw,22px)] text-black leading-[30px] mb-6">
            {whitePaper.description}
          </p>
          <div className="flex justify-center items-center h-full">
            <Link href={`/general-white-papers/${whitePaper.id}`}>
              <Button className="bg-transparent hover:bg-transparent border-y-0 border-x-4 text-black border-red hover:text-red h-12 rounded-none font-bold text-2xl">
                Learn More
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

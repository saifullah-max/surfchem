import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { NewsArticle } from "@/types/news";

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    // <Card className="overflow-hidden h-full flex flex-col">
    //   <div className="relative h-48 w-full">
    //     <Image
    //       src={article.image || "/placeholder.svg"}
    //       alt={article.title}
    //       fill
    //       className="object-cover"
    //       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    //     />
    //   </div>
    //   <CardContent className="flex flex-col flex-grow p-6">
    //     <h3 className="text-xl font-bold mb-3">{article.title}</h3>
    //     <p className="text-gray-600 text-sm mb-4 flex-grow">
    //       {article.excerpt}
    //     </p>
    //     <div className="mt-auto">
    //       <Link href={`/news/${article.slug}`}>
    //         <Button
    //           variant="outline"
    //           className="border-red-500 text-red-500 hover:bg-red-50 w-full"
    //         >
    //           Learn More
    //         </Button>
    //       </Link>
    //     </div>
    //   </CardContent>
    // </Card>

    <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="h-60 relative overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4 lg:p-6">
        <h3 className="text-[28px] font-bold text-black2 mb-4 leading-[32px]">
          {article.title}{" "}
        </h3>
        <p className="text-[clamp(17px,2vw,21px)] text-black leading-[30px] mb-6">
          {article.excerpt}
        </p>
        <div className="flex justify-center items-center h-full">
          <Link href={`/news/${article.slug}`}>
            <Button className="bg-transparent hover:bg-transparent border-y-0 border-x-4 text-black border-red hover:text-red h-12 rounded-none font-bold text-2xl">
              Learn More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

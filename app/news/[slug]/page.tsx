import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { getSingleNews } from "@/lib/backend";
import { NewsArticle } from "@/types/news";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface NewsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { slug: id } = await params;
  if (!id) return notFound();

  const article = await getSingleNews(id) as NewsArticle
  if (!article || article == null) {
    return notFound();
  }

  // Format the date
  const date = new Date(article.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Convert markdown-like content to paragraphs
  const contentParagraphs = article.content
    .split("\n\n")
    .filter((p) => p.trim() !== "")
    .map((paragraph, index) => {
      if (paragraph.startsWith("# ")) {
        return (
          <h1 key={index} className="text-3xl font-bold mb-6">
            {paragraph.replace("# ", "")}
          </h1>
        );
      } else if (paragraph.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
            {paragraph.replace("## ", "")}
          </h2>
        );
      } else if (paragraph.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-bold mt-6 mb-3">
            {paragraph.replace("### ", "")}
          </h3>
        );
      } else if (paragraph.startsWith("> ")) {
        return (
          <blockquote
            key={index}
            className="border-l-4 border-green-500 pl-4 italic my-6 text-gray-600"
          >
            {paragraph.replace("> ", "")}
          </blockquote>
        );
      } else if (paragraph.startsWith("- ")) {
        const items = paragraph
          .split("\n")
          .filter((item) => item.startsWith("- "))
          .map((item) => item.replace("- ", ""));
        return (
          <ul key={index} className="list-disc pl-5 my-4 space-y-2">
            {items.map((item, i) => (
              <li key={i} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        );
      } else {
        return (
          <p key={index} className="text-gray-700 mb-4 leading-relaxed">
            {paragraph}
          </p>
        );
      }
    });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Article Content */}
      <section className="py-12 bg-white overflow-x-hidden overflow-y-hidden">
        <div className="container ">
          <div className="grid lg:grid-cols-[2.5fr_1.5fr] items-start">
            <div className="pl-6 lg:px-16 pt-0">
              <div className="mb-16">
                <h1 className="text-[48px] md:text-[50px] leading-[50px] font-bold text-black2">
                  {article.title}
                </h1>
              </div>

              {/* ✅ Renders Markdown with images */}
              {/* <div className="prose max-w-none text-black2 text-[22px] prose-headings:font-bold prose-headings:text-black2 prose-h1:text-[44px] prose-h2:text-[22px] prose-p:text-[22px] prose-h1:mb-0 prose-h2:mb-0 prose-h2:mt-0 prose-p:mb-4 prose-h3:mt-0 prose-h2:text-blue-900 prose-img:rounded-lg prose-img:shadow-lg prose-h3:text-[32px] prose-h3:font-normal">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {article.content}
                </ReactMarkdown>
              </div> */}
            {/* ✅ Wrap everything in the prose container */}
<div className="prose max-w-none text-black2 text-[22px]
  prose-headings:font-bold prose-headings:text-black2
  prose-h1:text-[44px] prose-h2:text-[22px] prose-p:text-[22px]
  prose-h1:mb-0 prose-h2:mb-0 prose-h2:mt-0 prose-p:mb-4
  prose-h3:mt-0 prose-h2:text-blue-900 prose-img:rounded-lg
  prose-img:shadow-lg prose-h3:text-[32px] prose-h3:font-normal
">

  <ReactMarkdown
    rehypePlugins={[rehypeRaw]}
    components={{
      div: ({ node, className, children, ...props }) => {
        // Apply grid layout only for the special 3-image div
        if (className?.includes("grid grid-cols-1 md:grid-cols-3")) {
          return (
            <div
              {...props}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mr-4 mb-8"
            >
              {children}
            </div>
          );
        }

        // Otherwise, use normal prose styles for other divs
        return (
          <div {...props} className={className}>
            {children}
          </div>
        );
      },
      img: ({ node, className, ...props }) => (
        <img
          {...props}
          className={`${className || ""} w-full h-full object-cover rounded-lg`}
        />
      ),
    }}
  >
    {article.content}
  </ReactMarkdown>
</div>





            </div>
            {/* Image section */}
            <div
              className="hidden lg:block"
              style={{
                position: "relative",
                width: "640px",
                height: "642px",
                backgroundColor: "green",
                borderRadius: "327px 0 0 347px",
                overflow: "visible",
              }}
            >
              {/* White curve background behind */}
              <Image
                src="/assets/Union4White.png"
                alt="Background curve"
                width={827}
                height={837}
                style={{
                  position: "absolute",
                  left: "160px",
                  top: "96px",
                  zIndex: 1,
                }}
              />

              {/* Big drone image on top */}
              <img
                src={article.image}
                alt="Drone spraying field"
                style={{
                  position: "absolute",
                  top: "36px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: "50%",
                  border: "25px solid white",
                  width: "560px",
                  height: "560px",
                  zIndex: 2,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

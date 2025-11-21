"use client";

import { auth } from "@/lib/firebase";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DownloadButton({
    href,
    text,
    capitalized = false,
}: {
    href: string;
    text?: string;
    capitalized?: boolean;
}) {
    const [isAuth, setAuth] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((u) => setAuth(!!u));
        return () => unsubscribe();
    }, []);

    // if (!isAuth) return null;

    return (
        <div className="p-6 bg-white rounded-2xl shadow-2xl max-w-xl mx-auto h-[400px] flex items-start justify-center relative">
            <div className="relative flex items-center mt-12">
                {/* Left red bar — closer & slightly taller */}
                <span className="absolute -left-3 w-[5px] bg-red rounded-full h-[120%]" />
                <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-3xl font-bold text-black hover:text-red whitespace-nowrap ${capitalized ? "uppercase" : ""
                        }`}
                >
                    Download {text}
                </Link>
                {/* Right red bar — closer & slightly taller */}
                <span className="absolute -right-3 w-[5px] bg-red rounded-full h-[120%]" />

            </div>
        </div>

    );
}

"use client";

import { auth } from "@/lib/firebase";
import { Button, Link } from "@radix-ui/themes";

export default function DownloadButton({ href }: { href: string }) {
    return (
        <>
            {auth.currentUser != null && <Button
                type="submit"
                className="px-10 mb-20 bg-transparent hover:bg-transparent border-y-0 border-x-4 text-black border-red hover:text-red rounded-none font-bold text-4xl"
            >
                <Link href={href} target="_blank" rel="noopener noreferrer">
                    DOWNLOAD PDF
                </Link>
            </Button>}
        </>
    )
}

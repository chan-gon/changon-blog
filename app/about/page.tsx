import type { Metadata } from "next";
import { ArrowUpRight, Download } from "lucide-react";

export const metadata: Metadata = {
    title: "About Me",
    description: "Learn more about the author of this blog.",
};

const linkStyle = "inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 mt-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900";

export default function AboutPage() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">About Me</h1>
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <span className="font-mono text-xl text-black font-medium">Hi, I&apos;m Gon</span>
                <p className="text-lg text-gray-800">
                    Software Engineer living in Belgium.
                </p>
                <div className="text-lg text-gray-800">
                    I&apos;m a web developer who loves language learning, movies and music.
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <a
                        href="https://www.linkedin.com/in/changon-kim-ab567423b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkStyle}
                    >
                        LinkedIn
                        <ArrowUpRight size={14} />
                    </a>
                    <a
                        href="https://github.com/chan-gon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkStyle}
                    >
                        GitHub
                        <ArrowUpRight size={14} />
                    </a>
                </div>
            </div>
        </div>
    );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me",
    description: "Learn more about the author of this blog.",
};

export default function AboutPage() {
    return (
        <div className="max-w-4xl ">
            <h1 className="text-3xl font-bold mb-6">About Me</h1>
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <span className="font-mono text-xl text-black uppercase">The Power Of Love</span>
                <p className="text-lg text-gray-800">
                    I'm specially interested in making the user experience better in every possible ways.
                </p>
                <div className="text-lg text-gray-800">
                    I put user satisfaction before technology, because we build for people.
                </div>
                <div className="text-lg text-gray-800">
                    I believe technology matters, but I also believe technology only works at its best when it's designed with empathy and heart.
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900">
                        Contact
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                            <a
                                href="https://www.linkedin.com/in/changon-kim-ab567423b"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                            <a
                                href="https://github.com/chan-gon"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me",
    description: "Learn more about the author of this blog.",
};

export default function AboutPage() {
    return (
        <div className="max-w-4xl py-10">
            <h1 className="text-3xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-gray-700">
                I'm good at taking an action quickly.
            </p>
        </div>
    );
}

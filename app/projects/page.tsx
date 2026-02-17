import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "My toys",
};

export default function Projects() {
    return (
        <div className="max-w-4xl py-10">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <p className="text-lg text-gray-700">
                In progres
            </p>
        </div>
    );
}

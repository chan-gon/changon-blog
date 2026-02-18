import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "My toys",
};

export default function Projects() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <p className="text-lg text-gray-700">
                    In progress
                </p>
            </div>
        </div>
    );
}

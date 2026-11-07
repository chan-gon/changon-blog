import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Page Not Found",
};

export default function NotFound() {
    return (
        <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h1 className="text-3xl font-bold mb-4">404</h1>
            <p className="text-gray-600 mb-6">This page could not be found.</p>
            <Link href="/posts" className="text-blue-600 hover:underline">
                &larr; Back to all posts
            </Link>
        </div>
    );
}

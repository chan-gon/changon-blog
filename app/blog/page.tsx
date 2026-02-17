import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog",
    description: "Read my latest thoughts and tutorials.",
};

export default function BlogIndexPage() {
    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>

            <div className="grid gap-6">
                {/* Placeholder for blog posts list */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <Link href="/blog/welcome" className="block">
                        <h2 className="text-2xl font-semibold mb-2">Welcome to my new blog</h2>
                        <p className="text-gray-600">
                            This is a placeholder post to demonstrate the routing structure.
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

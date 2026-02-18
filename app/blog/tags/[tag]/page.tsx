import { getPostsByTag } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function TagPage({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;

    // Decode the tag in case it contains spaces or special characters
    const decodedTag = decodeURIComponent(tag);

    const posts = getPostsByTag(decodedTag);

    if (posts.length === 0) {
        return (
            <div className="max-w-4xl mx-auto py-10 px-4">
                <h1 className="text-3xl font-bold mb-8">
                    No posts found for tag: <span className="text-blue-600">"{decodedTag}"</span>
                </h1>
                <Link href="/" className="text-blue-600 hover:underline">
                    &larr; Back to all posts
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl px-4">
            <h1 className="text-3xl font-bold mb-8">
                Posts tagged with <span className="text-blue-600">"{decodedTag}"</span>
            </h1>

            <div className="grid gap-6">
                {posts.map((post) => (
                    <div
                        key={post.slug}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
                    >
                        <Link href={`/blog/${post.slug}`} className="block">
                            <h2 className="text-2xl font-semibold mb-2">
                                {post.title}
                            </h2>
                            <div className="text-sm text-gray-500 mb-3">
                                {post.date}
                            </div>
                            {post.description && (
                                <p className="text-gray-600">
                                    {post.description}
                                </p>
                            )}
                        </Link>
                        {post.tags && post.tags.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                                {post.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                                    >
                                        #{t}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                    &larr; Back to all posts
                </Link>
            </div>
        </div>
    );
}

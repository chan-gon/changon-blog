import { getPost } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <div>
            <h1 className="text-4xl font-bold mb-4 capitalize">
                {post.title}
            </h1>
            <div className="text-gray-600 mb-4">
                Published on {post.date}
            </div>
            <article className="max-w-4xl bg-white border border-gray-200 rounded-lg p-6 shadow-sm">

                <div className="prose max-w-none">
                    <MDXRemote source={post.content} />
                </div>

                {post.tags && post.tags.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">
                            Tags
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <Link
                                    key={tag}
                                    href={`/blog/tags/${tag}`}
                                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                                >
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </article>
        </div>
    );
}

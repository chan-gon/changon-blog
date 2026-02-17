import { getPost } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
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
        <article className="max-w-4xl py-10 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h1 className="text-2xl font-bold mb-4 capitalize">
                {post.title}
            </h1>
            <div className="text-gray-600 mb-8">
                Published on {post.date}
            </div>

            <div className="prose max-w-none">
                <MDXRemote source={post.content} />
            </div>
        </article>
    );
}

import { getProjectPost } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getProjectPost(slug);
    if (!post) {
        return { title: 'Project Not Found' };
    }
    return { title: post.title, description: post.description };
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getProjectPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <div>
            <h1 className="text-4xl font-bold mb-3 capitalize">
                {post.title}
            </h1>
            <h4 className="text-gray-600 mb-4">
                {post.description}
            </h4>
            <div className="text-gray-600 mb-4 flex gap-4">
                <span>Published on {post.date}</span>
                {post.githubUrl && (
                    <a href={post.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        GitHub
                    </a>
                )}
                {post.demoUrl && (
                    <a href={post.demoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Demo
                    </a>
                )}
            </div>
            <article className="max-w-4xl bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="prose max-w-none text-gray-900 font-sans">
                    <MDXRemote source={post.content} />
                </div>
            </article>
        </div>
    );
}

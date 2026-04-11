import Link from "next/link";
import { getProjectPosts } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "My toys and projects",
};

export default async function ProjectsPage() {
  const projectPosts = getProjectPosts();

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="flex flex-col gap-6">
        {projectPosts.length > 0 ? (
          projectPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-2">
                <Link href={`/projects/${post.slug}`} className="hover:text-blue-600 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">
                {post.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <Link
                  href={`/projects/${post.slug}`}
                  className="text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  View Project
                </Link>
                <div className="flex gap-4 items-center">
                    {post.githubUrl && (
                        <a href={post.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-medium">
                            GitHub
                        </a>
                    )}
                    {post.demoUrl && (
                        <a href={post.demoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-medium">
                            Demo
                        </a>
                    )}
                    <span className="text-sm text-gray-500">{post.date}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No projects found. Add some MDX files to content/projects.</p>
        )}
      </div>
    </div>
  );
}

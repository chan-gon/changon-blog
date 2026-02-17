import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import Search from "@/components/search";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chan Gon Kim",
  description: "A personal note to scribble",
};

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const postsPerPage = 10;

  const blogPosts = getBlogPosts();

  // Filter posts based on search query
  const filteredPosts = blogPosts.filter((post) => {
    const term = query.toLowerCase();
    return (
      post.title.toLowerCase().includes(term) ||
      post.content.toLowerCase().includes(term)
    );
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="w-full">
      <Search placeholder="Search blog posts..." />
      <div className="flex flex-col gap-6">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                  {post.title}
                </Link>
              </h2>
              {/* <p className="text-gray-600 mb-4">
                {post.content.length > 200
                  ? `${post.content.substring(0, 200)}...`
                  : post.content}
              </p> */}
              <p className="text-gray-600 mb-4">
                {post.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Read more
                </Link>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No posts found matching &quot;{query}&quot;.</p>
        )}
      </div>

      <div className="mt-8 flex justify-center gap-4">
        {currentPage > 1 ? (
          <Link
            href={`/?query=${query}&page=${currentPage - 1}`}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Prev
          </Link>
        ) : (
          <button disabled className="px-4 py-2 border rounded opacity-50 cursor-not-allowed">
            Prev
          </button>
        )}

        {currentPage < totalPages ? (
          <Link
            href={`/?query=${query}&page=${currentPage + 1}`}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Next
          </Link>
        ) : (
          <button disabled className="px-4 py-2 border rounded opacity-50 cursor-not-allowed">
            Next
          </button>
        )}
      </div>
    </div>
  );
}

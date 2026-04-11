import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
    slug: string;
    title: string;
    date: string;
    content: string; // The raw MDX content
    description?: string;
    hidden?: boolean;
    tags?: string[];
    githubUrl?: string;
    demoUrl?: string;
};

function getMDXFiles(dir: string): string[] {
    if (!fs.existsSync(dir)) {
        return [];
    }
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            /* Recurse into a subdirectory */
            results = results.concat(getMDXFiles(fullPath));
        } else {
            /* Is a file */
            if (path.extname(fullPath) === ".mdx") {
                results.push(fullPath);
            }
        }
    });
    return results;
}

export function getPosts(contentType: "blog" | "projects"): Post[] {
    const dir = path.join(process.cwd(), "content", contentType);
    const filePaths = getMDXFiles(dir);

    const posts = filePaths.map((filePath) => {
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContent);
        const slug = path.basename(filePath, ".mdx");

        return {
            slug,
            title: data.title,
            date: data.date,
            content: content,
            description: data.description,
            hidden: data.hidden,
            tags: data.tags,
            githubUrl: data.githubUrl,
            demoUrl: data.demoUrl,
        } as Post;
    });

    // Filter out hidden posts
    const visiblePosts = posts.filter((post) => !post.hidden);

    // Sort posts by date (newest first)
    return visiblePosts.sort((a, b) => {
        if (a.date > b.date) {
            return -1;
        }
        return 1;
    });
}

export const getBlogPosts = () => getPosts("blog");
export const getBlogPost = (slug: string) => getBlogPosts().find(p => p.slug === slug);
export const getBlogPostsByTag = (tag: string) => getBlogPosts().filter((post) => post.tags && post.tags.includes(tag));

export const getProjectPosts = () => getPosts("projects");
export const getProjectPost = (slug: string) => getProjectPosts().find(p => p.slug === slug);
export const getProjectPostsByTag = (tag: string) => getProjectPosts().filter((post) => post.tags && post.tags.includes(tag));

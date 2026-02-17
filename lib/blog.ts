import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/blog");

export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    content: string; // The raw MDX content
    description?: string;
    hidden?: boolean;
};


function getMDXFiles(dir: string): string[] {
    if (!fs.existsSync(dir)) {
        return [];
    }
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            /* Recurse into a subdirectory */
            results = results.concat(getMDXFiles(file));
        } else {
            /* Is a file */
            if (path.extname(file) === ".mdx") {
                results.push(file);
            }
        }
    });
    return results;
}

export function getBlogPosts(): BlogPost[] {
    const filePaths = getMDXFiles(contentDirectory);

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
        } as BlogPost;
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

export function getPost(slug: string): BlogPost | undefined {
    const posts = getBlogPosts();
    return posts.find((post) => post.slug === slug);
}

import { NextResponse, type NextRequest } from "next/server";

// Next.js answers 500 for dynamic routes whose URL has invalid percent-encoding,
// before the page code runs. Rewriting to an unmatched path renders the 404 page.
export function proxy(request: NextRequest) {
    try {
        decodeURIComponent(request.nextUrl.pathname);
    } catch {
        return NextResponse.rewrite(new URL("/404", request.url));
    }
}

export const config = {
    matcher: ["/posts/:path*", "/projects/:path*"],
};
